<?php
    if(session_status() === PHP_SESSION_NONE){
        session_start();
        session_unset();
        session_destroy();
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
      .logout-btn{
        text-decoration:none;
        color:#000;
        text-align:center;
      }
      .logout-btn-wrappe{
        display:flex;
        alignt-items:center;
        justify-content:center;
      }
      .btn{
        border:none;
      }
    </style>
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">PHP todo app</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <?php if(isset($_SESSION['user_id'])): ?>
          <span> </span>Welcome <?= htmlspecialchars($_SESSION['user_name']); ?>!
      <?php endif; ?> 
      <?php if(isset($_SESSION['EDIT_PROFILE'])): ?>+
          <span>You are edit profile , please login again!</span>
      <?php endif; ?>  
      <form class="d-flex">
        <?php if(isset($_SESSION['user_id'])) : ?>
          <ul class='navbar-nav'>
                <li class="nav-item">
                    <form method="POST" action="../logout.php" class="nav-item logout-btn-wrappe">
                      <input type="hidden"name='user_id' value='<?= isset($_SESSION['user_id'])?>'>
                      <input type="hidden" name='logout'>
                      <a  class='logout-btn nav-link' href='../logout.php'><i class="fa-solid fa-right-from-bracket"></i> Logout</a>
                    </form>
                </li>
                <form class="nav-item" method="POST" action="./assets/profile.php"> 
                    <input type="hidden" name="user_id"  value='<?= isset($_SESSION['user_id'])?>'>  
                    <input type="hidden" name='profile' value='1'>
                    <button type='sumbit' class='nav-link btn'>
                        Profile <i class="fa-solid fa-user"></i>
                    </button>
                    <!-- <a class="nav-link" href="./assets/profile.php"><i class="fa-solid fa-right-to-bracket"></i> <span></span>Profile</a> -->
                </form>
            </ul>
        <?php else: ?>
            <ul class='navbar-nav'>
                <li class="nav-item">
                    <a class="nav-link" href="./assets/register.php"><i class="fa-solid fa-user"></i> <span></span> Sing up</a>
                </li>
                <li class="nav-item">   
                    <a class="nav-link" href="./assets/login.php"><i class="fa-solid fa-right-to-bracket"></i> <span></span>Login</a>
                </li>
            </ul>
        <?php endif; ?>
      </form>
    </div>
  </div>
</nav>

</body>
</html>