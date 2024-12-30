<?php
    require('./db.php');
    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        $title = $_POST['title'];
        $price = $_POST['price'];

        $stmt = $conn -> prepare('INSERT INTO product (name,sale) VALUES (:name, :sale)');
        $stmt -> execute([
            'name' => $title,
            'sale' => $price,
        ]);

        $_SESSION['post-created'] = 'Post created successfuly ✅';

        header('Location: /');
    }

?>