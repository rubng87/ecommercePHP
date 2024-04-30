<?php

require_once('connection.php');

$email = $_POST['email'];
$password_user = $_POST['password'];

$select = "SELECT password FROM clientes WHERE email = ?";
$query = $conn->prepare($select);
$query->execute([$email]);
$result = $query->fetch();

// var_dump($result);

if (!$result) {
    echo "Usuario o contraseña incorrectos";
    die();
}

$password_hash = $result['password'];
if (password_verify($password_user, $password_hash)) {
    echo "Usuario o contraseña correctos";
    header('Location: ecommerce.php');
    
} else {
    echo "Usuario o contraseña incorrectos";
}