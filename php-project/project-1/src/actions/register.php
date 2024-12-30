<?php
    require_once __DIR__ . '/../helpers.php';


    $name = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $cpassword = $_POST['cpassword'];

    addOldValue('name',$name);
    addOldValue('email',$email);
    addOldValue('password',$password);
    addOldValue('cpassword',$cpassword);



    $_SESSION['validation'] = [];

    
    if(empty($name)){
        setValidationError('name','Incorect name!');
    }
    if(empty($email)){
        setValidationError('email','Incorect email!');

    }
    if(empty($password)){
        setValidationError('password','Plese enter password!');
    }
    if($cpassword !== $password || empty($cpassword)){
        setValidationError('cpassword','Password not confirmed!');
    }



    if(!empty($_SESSION['validation'])){
        header('Location: /register.php');
    }

    $pdo = getPDO();

    $query = "INSERT INTO user (name, email, password) VALUES (:name, :email, :password)";

    var_dump($query);   
    $params = [
        ':name' => $email,
        ':email' => $email,
        ':password' => password_hash($password,PASSWORD_DEFAULT), 
    ];


    $stmt = $pdo->prepare($query);

    try {
        $stmt->execute($params);

        echo "User registered successfuly!!";
    } catch (\Throwable $e) {
        echo "Error: " . $e->getMessage();
        throw $e;
    }
?>