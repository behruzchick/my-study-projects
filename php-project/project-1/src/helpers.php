<?php
    session_start();

    require_once __DIR__ . '/config.php';


    function redirect(string $path){
        header("Location: $path");
        die();
    }

    function setValidationError(string $fieldName, string $message): void
    {
        $_SESSION['validation'][$fieldName] = $message;
    }

    function hasValidationError(string $fieldName) : bool{
        return isset($_SESSION['validation'][$fieldName]);
    }

    function validationErrorAttr(string $fieldName): string{
        return isset($_SESSION['validation'][$fieldName]) ? 'aria-invalid="true"' : '';
    }

    function validationErrorMessage(string $fieldName): string
    {
        $message = $_SESSION['validation'][$fieldName] ?? '';
        unset($_SESSION['validation'][$fieldName]);
        return $message;
    }

    function old(string $key)
        {
            $value = $_SESSION['old'][$key] ?? '';
            unset($_SESSION['old'][$key]);
            return $value;
        }

    function addOldValue(string $key , mixed $value) : void{
        $_SESSION['old'][$key] = $value;
    }

    function clearOldValue (string $key){
        return $_SESSION['old'][$key] ?? '';
    }

    function getPDO(): PDO 
    {    
        try {
            return new \PDO('mysql:host=' . DB_HOST . ';port=' . DB_PORT . ';charset=utf8;dbname=' . DB_NAME, DB_USERNAME, DB_PASSWORD);
            // echo "Connected successfully!";
            // return $pdo;
        } catch (\PDOException $e) {
            die("Connection error: {$e->getMessage()}");
        }
    }

?>