<?php
    if(session_status() === PHP_SESSION_NONE){
        session_start();
        session_unset();
        session_destroy();

        header("Location: /");
    }



    // if($_SERVER['REQUEST_METHOD'] == "POST" && $_POST['logout']){
    //     $user_id = $_POST['user_id'];
    //     unset($_SESSION['user']['id']); 



    //     header("Location: /");

    //     exit;
    // }
?>