<?php
    require 'db.php';

    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $name = $_POST["name"];
        $email = $_POST["email"];
        $password = $_POST["password"];

        if(empty($name)){
            die ("Enter name");
        }
        if (empty($email)){
            die ("Enter email");
        }
        if(empty($password)){
            die("Enter password");
        }
        try {
            $stmt = $conn->prepare("INSERT INTO user (name, email, password) VALUES (:name, :email, :password)");
            $stmt->execute([
                "name" => $name,
                "email" => $email,
                "password" => password_hash($password, PASSWORD_DEFAULT)
            ]);

            header("Location: /");
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }

    }

?>