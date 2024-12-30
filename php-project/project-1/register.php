<?php
    require_once __DIR__ . '/src/helpers.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <title>Document</title>

    <style>
        .form{
            margin: 200px auto;
            width: 300px;
        }

    </style>
</head>
<body>
    <form class="form" action='./src/actions/register.php' method='POST'>
            <h1 class='m-3'>Sign up</h1>
            <div class="form-floating mb-2">
            <input type="text" class="form-control" name='username' id="floatingInput" placeholder="name@example.com"
                <?php echo validationErrorAttr('name'); ?>
                value="<?php echo old('name') ?>"
            >
            <?php if(hasValidationError('name')): ?>
                <small><?php echo validationErrorMessage('name'); ?></small>
            <?php endif; ?>
            <label for="floatingInput">Name</label>
            </div>
        <div class="form-floating mb-2">
            <input type="email" class="form-control" name='email' id="floatingPassword" placeholder="Password" <?php echo validationErrorAttr('email'); ?>  value="<?php echo old('email') ?>">
            <label for="floatingPassword">E-mail address</label>
            <?php if(hasValidationError('email')): ?>
                <small><?php echo validationErrorMessage('email'); ?></small>
            <?php endif; ?>
        </div>
        <div class="form-floating mb-2">
            <input type="password" class="form-control" name='password' id="floatingPassword" placeholder="Password" <?php echo validationErrorAttr('password'); ?> value="<?php echo old('password') ?>">
            <label for="floatingPassword">Password</label>
            <?php if(hasValidationError('password')): ?>
                <small><?php echo validationErrorMessage('password'); ?></small>
            <?php endif; ?>
        </div>
        <div class="form-floating">
            <input type="password" class="form-control" name='cpassword' id="floatingPassword" placeholder="Password" <?php echo validationErrorAttr('cpassword'); ?> value="<?php echo old('cpassword') ?>">
            <label for="floatingPassword">Confirm Password</label>
            <?php if(hasValidationError('cpassword')): ?>
                <small><?php echo validationErrorMessage('cpassword'); ?></small>
            <?php endif; ?>
        </div>
            <button type='submit' id='submit' class='button btn btn-primary my-3'>Submit</button>
        </form>



<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</body>
</html>