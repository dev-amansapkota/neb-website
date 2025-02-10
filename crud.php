<?php
// Database connection
$host = 'sql103.infinityfree.com';
$dbname = 'if0_37632606_notes';
$username = 'if0_37632606';
$password = 'cKhJ3nqRai1pGJ';
$conn = new mysqli($host, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}

// Handle adding a note (POST request)
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['title'], $_POST['content'])) {
        $title = htmlspecialchars($_POST['title']);
        $content = htmlspecialchars($_POST['content']);

        // Insert note into database
        $sql = "INSERT INTO notes (title, content) VALUES ('$title', '$content')";
        if ($conn->query($sql) === TRUE) {
            echo json_encode(["success" => "Note added successfully!"]);
        } else {
            echo json_encode(["error" => "Error: " . $conn->error]);
        }
    } else {
        echo json_encode(["error" => "Missing title or content"]);
    }
    $conn->close();
    exit;
}

// Handle fetching notes (GET request)
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $sql = "SELECT * FROM notes ORDER BY created_at DESC";
    $result = $conn->query($sql);

    $notes = [];
    while ($note = $result->fetch_assoc()) {
        $notes[] = $note;
    }

    echo json_encode($notes);
    $conn->close();
    exit;
}

// If method is not allowed
http_response_code(405);
echo json_encode(["error" => "Method Not Allowed"]);
?>
