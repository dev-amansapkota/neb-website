<?php
// Database connection
$host = 'sql103.infinityfree.com';
$dbname = 'if0_37632606_notes';
$username = 'if0_37632606';
$password = 'cKhJ3nqRai1pGJ';
$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Handle adding a note
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['title'], $_POST['content'])) {
    $title = htmlspecialchars($_POST['title']);
    $content = htmlspecialchars($_POST['content']);

    // Insert the new note into the database
    $sql = "INSERT INTO notes (title, content) VALUES ('$title', '$content')";
    if ($conn->query($sql) === TRUE) {
        $success = "Note added successfully!";
    } else {
        $error = "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Fetch all notes
$sql = "SELECT * FROM notes ORDER BY created_at DESC";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Notes</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: auto;
            background: white;
            padding: 20px;
            box-shadow: 0px 0px 10px gray;
            border-radius: 8px;
        }
        .note {
            background: #f9f9f9;
            padding: 10px;
            margin: 10px 0;
            border-left: 5px solid #28a745;
        }
        .note h3 {
            margin: 0;
        }
        .note p {
            font-size: 16px;
        }
        input, textarea {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        button {
            background-color: #28a745;
            color: white;
            padding: 10px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .error { color: red; }
        .success { color: green; }
    </style>
</head>
<body>

    <div class="container">
        <h2>Notes</h2>

        <?php if (!empty($error)) echo "<p class='error'>$error</p>"; ?>
        <?php if (!empty($success)) echo "<p class='success'>$success</p>"; ?>

        <h3>Add New Note</h3>
        <form method="POST">
            <input type="text" name="title" placeholder="Title" required>
            <textarea name="content" placeholder="Content" rows="5" required></textarea>
            <button type="submit">Add Note</button>
        </form>

        <hr>

        <h3>All Notes</h3>
        <?php while ($note = $result->fetch_assoc()) : ?>
            <div class="note">
                <h3><?php echo htmlspecialchars($note['title']); ?></h3>
                <p><?php echo htmlspecialchars($note['content']); ?></p>
                <p><small>Created at: <?php echo $note['created_at']; ?></small></p>
            </div>
        <?php endwhile; ?>
    </div>

</body>
</html>

<?php $conn->close(); ?>
