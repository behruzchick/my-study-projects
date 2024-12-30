<?php
    require('./db.php');
    if($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['DELTE'])){



        $post_id = $_POST['post_id'];

        $stmt = $conn->prepare("DELETE FROM product WHERE id = ?");

        $stmt->execute([$post_id]);

        header("Location: /");
    }

    if($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['PUT'])){
        $post_id = $_POST['post_id'];
        $name = $_POST['name'];
        $sale = $_POST['sale'];

        $stmt = $conn -> prepare("UPDATE product SET name = :name , sale = :sale WHERE id = :id");

        $stmt -> execute([
            'name'=> $name,
            'sale' => $sale,
            'id' => $post_id
        ]);

        header("Location: /");
    }
?>