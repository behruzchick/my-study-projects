<?php
    require 'db.php';

    if($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['PUT'])){
        $post_id = $_POST['post_id'];
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
    <form class="form p-5" action='./post-actions.php' method='POST'>
        <h2>Edit the post number : <?= $post_id; ?></h2>
        <div class="form-floating mb-2">
            <input type="hidden" name='post_id' value="<?= $_POST['post_id']; ?>">
            <input type="text" class="form-control" name='name' id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Enter the new title of post</label>
        </div>
        <div class="form-floating mb-2">
            <input type="hidden" name='PUT'>
            <input type="text" class="form-control" name='sale' id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Enter the new sale of post</label>
        </div>
            <button type='submit' id='submit' class='button btn btn-warning my-3'>Edit</button>
    </form>
</body>
</html>