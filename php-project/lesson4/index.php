<?php
    $server = "localhost";
    $userName = "root";
    $password = "";
    $dbName = "dokon";


    $connect = mysqli_connect($server,$userName,$password,$dbName);
    
    if(mysqli_connect_errno()){
        die("Connect Error").mysqli_connect.error();
    }

    echo "Successfuly connected to db \n";

    // CREATE DATABASE


    // $sql = "CREATE DATABASE dokon";

    // if($connect -> query($sql) === TRUE){
    //     echo "Success!";
    // }else{
    //     echo "Error in create".mysqli_error();
    // }

    // $connect -> close();



    // CREATE CATEGORY TABLE
    // $table1 = "CREATE TABLE category(
    //     id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    //     name varchar(255) NOT NULL ,
    //     slug varchar(100) NOT NULL,
    //     description varchar(255) NOT NULL,
    //     date DATETIME
    // )";
    //     if($connect -> query($table1) === TRUE){
    //         echo "Successfuly created table!!";
    //     }else{
    //         echo "Error in create".$connect-> error;
    //     }
    
    //     $connect -> close();

    // CREATE PRODUCT TABLE


    // $table2 = "CREATE TABLE Product(
    //     id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    //     name varchar(255) NOT NULL ,
    //     sale varchar(100) NOT NULL ,
    //     date DATETIME
    // )";
    //     if($connect -> query($table2) === TRUE){
    //         echo "Successfuly created second table!!";
    //     }else{
    //         echo "Error in create".$connect-> error;
    //     }
    


    // CREATE USER TABLE 

    $user = "CREATE TABLE User(
        id int NOT NULL AUTO_INCREMENT PRIMARY KEY ,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255)  NOT NULL,
        password VARCHAR(255) NOT NULL,
        date DATETIME
    )";

    if($connect -> query($user) === TRUE){
            echo "Successfuly created user table!!";
        }else{
            echo "Error in create".$connect-> error;
        }
    
?>