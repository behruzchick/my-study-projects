<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>Document</title>
    <style>
        .form-container{
            width: 400px;
            margin: 200px auto;
        }
    </style>
</head>
<body>
    <form method='POST' class="form-container" action='../editProfile.php'>
        <h4 class='mb-3'>Edit you are profile.</h4>
        <div class="form-floating mb-2">
            <input type="hidden" name='EDIT_PROFILE'>
            <input class='form-control' name='name' id='floadingInput' type="text">
            <label for='floadingInput'>Enter the new name</label>
        </div>
        <div class="form-floating mb-2">
            <input class='form-control' name='email' id='floadingInput' type="text">
            <label for='floadingInput'>Enter the new email</label>
        </div>
        <button class='btn btn-primary' type="submit">Edit</button>
    </form>
</body>
</html>