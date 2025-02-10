from flask import Flask, request, jsonify, render_template
import sqlite3
from datetime import datetime

app = Flask(__name__)

# Database setup
def init_db():
    conn = sqlite3.connect('notes.db')
    cursor = conn.cursor()
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS notes (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            content TEXT NOT NULL,
            created_at TEXT NOT NULL
        )
    ''')
    conn.commit()
    conn.close()

# Initialize database on app startup
init_db()

# Route to render the HTML page
@app.route('/')
def index():
    return render_template('index.html')

# Route to fetch all notes (GET request)
@app.route('/crud', methods=['GET'])
def get_notes():
    conn = sqlite3.connect('notes.db')
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM notes ORDER BY created_at DESC')
    notes = cursor.fetchall()
    conn.close()
    # Return notes as JSON
    return jsonify([{'id': note[0], 'title': note[1], 'content': note[2], 'created_at': note[3]} for note in notes])

# Route to add a new note (POST request)
@app.route('/crud', methods=['POST'])
def add_note():
    title = request.form['title']
    content = request.form['content']
    created_at = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    conn = sqlite3.connect('notes.db')
    cursor = conn.cursor()
    cursor.execute('INSERT INTO notes (title, content, created_at) VALUES (?, ?, ?)', (title, content, created_at))
    conn.commit()
    conn.close()

    return jsonify({"success": "Note added successfully!"})

if __name__ == '__main__':
    app.run(debug=True)
