<?php
    session_start();
    require 'db.php';

    if($_SERVER["REQUEST_METHOD"] == "POST"){
        $email = $_POST["email"];
        $password = $_POST["password"];

        if (empty($email)){
            die ("Enter email");
        }
        if(empty($password)){
            die("Enter password");
        }
        try {
            $stmt = $conn->prepare("SELECT * FROM user WHERE email = :email");
            $stmt->execute([
                "email" => $email,
            ]);
            $user = $stmt->fetch(PDO::FETCH_ASSOC);

            if($user && password_verify($password,$user['password'])){
                $_SESSION['user_id'] = $user['id'];
                $_SESSION['user_name'] = $user['name'];
            }else{
                die("Invalid email or password!");
            }
            header("Location: /");
        } catch (PDOException $e) {
            echo "Error: " . $e->getMessage();
        }

    }

?>