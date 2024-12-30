<?php
    if($_SERVER["REQUEST_METHOD"] === "POST"){
        $url = $_POST['url'];
        $username = $_POST['username'];
        $email = $_POST['email'];
        $dir = 'uploads/';
        $age = $_POST['age'];
        $password = $_POST['password'];

        if(empty($email)){
            echo "Email is empty";
        }
        if(empty($username)){
            echo "Username is empty";
        }
        if(empty($age)){
            echo "Age is empty";
        }
        if(empty($password)){
            echo "Password is empty";
        }

        if(!filter_var($url,FILTER_VALIDATE_URL)){
            echo "Incorect url!";
        }
        if(!filter_var($email,FILTER_VALIDATE_EMAIL)){
            echo "Incorect url!";
        }
        if(!is_dir($dir)){
            mkdir($dir,0777,true);
        }

        $file = $dir . basename($_FILES["file"]["name"]);
        $imageFileType = strtolower(pathinfo($file, PATHINFO_EXTENSION));

        $check = getimagesize($_FILES["file"]['tmp_name']);

        if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"){
            die("Incrorect file type!");
        }

        if($check === false){
            die("Incorect file!");
        }

        if(move_uploaded_file($_FILES['file']['tmp_name'],$file)){
            echo "Hello $username , you are age is  $age, avatar:<br>";
            echo "<img src='$file' alt='User Image'>";
        }else{  
            die("Error in uploading");
        }

    }else{
        die("403");
    }

?>