<?php
    require('../db.php');
    session_start();

    if($_SERVER['REQUEST_METHOD'] == 'POST'){
        $user_id = $_POST['user_id'];

        $stmt = $conn -> prepare("SELECT * FROM user WHERE id = :id");

        $stmt -> execute(['id' => $user_id]);
        $user = $stmt -> fetch(PDO::FETCH_ASSOC);

    }else{
        die("No post provided!");
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <title>Document</title>
    <style>
        .user-container{
            position:absolute;
            left:40%;
            top:30%;
            /* border:2px solid #000; */
            /* border-radius:10px; */
        }
    </style>
</head>
<body>
    <div class="user-container">
        <div class="row-1 d-flex align-items-center gap-4 p-3 border mb-3 rounded">
            <div class="user-met">
                <i class="fa-solid fa-user"></i>
            </div>
            <div class="user-data">
                <h4 class='mb-0'><?= $user['name']?></h4>
                <h5 class='m-0'><?= $user['email']?></h5>
            </div>
        </div>
        <div class="user-actions d-flex gap-3">
            <form action="../assets/editProfile.php">
                <input type="hidden" name='edit-profile' value='<?= $user['id']; ?>'>
                <a class='btn btn-warning' href="../assets/editProfile.php">Edit profile</a>
            </form>
            <form action="">
                <button type='button' class='btn btn-primary warning rounded'>Logout</button>
            </form>
        </div>
    </div>
</body>
</html>