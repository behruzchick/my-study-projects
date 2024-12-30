<?php
    session_start();
    require 'db.php';
    // session_start();
    if(isset($_SESSION['post-created'])){
        $message = $_SESSION['post-created'];
    }

    $stmt = $conn->prepare('SELECT * FROM product');
    $stmt->execute();

    $posts = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <title>Document</title>

    <style>
        .icon-delete{
            width:50px;
            border-radius:10px;
            color:"white"
        }
        .icon-edit{
            width:50px;
            border-radius:10px;
            color:"white"
        }
        .post-actions{
            display:'flex';
        }
    </style>
</head>
<body>
        <?php require('./assets/header.php') ?>
        <?php if(isset($_SESSION['post-created'])): ?>
            <div class="alert alert-primary" role="alert">
             <?=  $_SESSION['created-post']; ?>
             <?php unset($_SESSION['post-created'])  ?>
            </div>+ill9o+
        <?php endif; ?>
    <form class="form p-3" action='./form.php' method='POST'>
        <h1>Create post</h1>
        <div class="form-floating mb-2">
            <input type="text" class="form-control" name='title' id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Title</label>
        </div>
        <div class="form-floating mb-2">
            <input type="text" class="form-control" name='price' id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Price</label>
        </div>
            <button type='submit' id='submit' class='button btn btn-primary my-3'>Submit</button>
    </form>
        <div class="row p-3">
            <?php foreach($posts as $post): ?>
                <div class="col-sm-3 mb-3">
                    <div class="card">
                        <h5 class="card-header">Card <?= $post['id'] ?></h5>
                        <div class="card-body">
                        <h5 class="card-title"><?= $post['name']?></h5>
                        <p class="card-text"><?= $post['sale'] ?></p>
                        <div class="post-actions d-flex cursor-pointer gap-2">

                            <form action='./post-actions.php' method='POST'>
                                <input type="hidden" name='post_id' value="<?= $post['id'] ?>">
                                <input type="hidden" name='DELTE'>
                                <button name='DELETE' class="icon-delete bg-danger d-flex align-items-center justify-content-center p-3">
                                    <i class="fa-sharp fa-solid fa-trash"></i>
                                </button>
                            </form>
                            <form method='POST' action='./edit.php'>
                                <input type="hidden" name='post_id' value="<?= $post['id'] ?>">
                                <input type="hidden" name='PUT'>
                                <button class="icon-delete bg-warning d-flex align-items-center justify-content-center p-3">
                                    <i class="fa-solid fa-pen-to-square"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
            <?php endforeach; ?>
        </div>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

</body>
</html>