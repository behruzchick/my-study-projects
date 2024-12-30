<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>Document</title>
    <style>
        .form{
            border:3px solid #000;
            border-radius:10px;
            width: 500px;
            margin: 100px auto;
        }
    </style>
</head>
<body>
    <form class="form p-5" action='../login.php' method='POST'>
        <h2 class='mb-4'>Login to account</h2>
        <div class="form-floating mb-2">
            <input type="text" class="form-control" name='email' id="floatingInput" placeholder="name@example.com">
            <label for="floatingInput">Email</label>
        </div>
        <div class="form-floating mb-2">
            <input type="hidden" name='PUT'>
            <input type="text" class="form-control" name='password' id="floatingPassword" placeholder="Password">
            <label for="floatingPassword">Password</label>
        </div>
            <button type='submit' id='submit' class='button btn btn-primary my-3'>Login</button>
            <p>Don't have a any account? <a href="register.php">Register</a></p>
    </form>
</body>
</html>