<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link  rel='stylesheet' href='style.css'/>
    <title>Document</title>
</head>
<body>
<?php
        $nameErr = $emailErr = $passwordErr = $cPasswordErr = "";
        $name = $email = $password = $cPassword = "";

        if($_SERVER['REQUEST_METHOD'] == "POST"){


            if(empty($_POST['name'])){
                echo "Enter name <br>";
            }else{
                $name = $_POST["name"];
            }    
            if(empty($_POST['email'])){
                echo "Enter email! <br>";
            }else{
                $email = $_POST['email'];
    
                if(!filter_var($email,FILTER_VALIDATE_EMAIL)){
                    echo "Invalid email format! <br>";
                }
            }
    
            if(empty($_POST['password'])){
                echo "Enter password <br>";
            }else{
                $password = $_POST['password'];
            }
    
            if(empty($_POST['cpassword'])){
                echo "Pleae confirm  password <br>";
            }else{
                $cPassword = $_POST['cpassword'];
                
                if($cPassword !== $password){
                    echo "Password not confirmed! <br>";
                }
            }


        }
    ?>
    <div class="form-wrappe">
        <form method='POST' class='form' action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
            Name:<input name='name' type="text"><br>
            <span  class='error'><?php echo $nameErr;?></span>
            E-mail:<input name='email' type="text"><br>
            <span class='error'><?php echo $emailErr;?></span>
            Password:<input name='password' type="text"><br>
            <span class='error'><?php echo $passwordErr;?></span>
            Confirm password:<input name='cpassword' type="text">
            <span class='error'><?php echo $cPasswordErr;?></span>
            <button>Sumbit</button>
        </form>
    </div>

        <?php
        if($_SERVER['REQUEST_METHOD'] == "POST"){
            echo "Your are data: <br>";
            echo "Name: ".$name.'<br>';
            echo "You are email: ".$email."<br>";
            echo "Password: ".$password."<br>";
            echo "Confirmed password: ".$cPassword."<br>";
        }
        ?>
</body>
</html>