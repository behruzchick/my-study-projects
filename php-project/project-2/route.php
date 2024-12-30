<?php
    $request = $_SERVER['REQUEST_URI'];
    $viewDir = './assets/';

    switch($request){
        case '';

        case'/':
            require __DIR__ . $viewDir.'index.php';
            break;

        case '/login':
            require __DIR__ . $viewDir. 'login.php';
            break;
        case '/register':
            require __DIR__ . $viewDir. 'register.php';
            break;

        default:
            http_response_code(404);
            require __DIR__ . $viewDir . '404.php';
    }
?>