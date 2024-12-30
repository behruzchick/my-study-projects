<?php 


    session_start();

    $_SESSION['username'] = "Behruz";

    if(isset($_SESSION['username'])){
        echo "Username is :" .$_SESSION['username'];
    }else{
        echo "Session not found!";
    }

?>  