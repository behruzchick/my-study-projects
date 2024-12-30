<?php  
    require './db.php';
    if (session_status() === PHP_SESSION_NONE) {
        session_start();
    }
    
    if($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['EDIT_PROFILE'])){
        $name = $_POST['name'];
        $email = $_POST['email'];
        $user_id = $_SESSION['user_id'];
        
        $stmt = $conn->prepare("UPDATE user SET name = :name, email = :email WHERE id =:user_id");

        $stmt->execute([
            'name' => $name,
            'email' => $email,
            'id'   => $user_id
        ]);

        $_SESSION['EDIT_PROFILE'] = 'You changed you are profile data,please login again!';

        header("Location: ./logout.php");
    }else{
        die("no post provided!");
    }
?>