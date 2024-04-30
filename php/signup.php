<?php

require_once('connection.php');

$_POST = json_decode(file_get_contents('php://input'), true);

// Comprobar el POST
// echo "<pre>";
// var_dump($_POST);
// echo "</pre>";

$nombre = $_POST['nombre'];
$apellidos = $_POST['apellidos'];
$password = $_POST['password'];
$email = $_POST['email'];
$nif = $_POST['nif'];
$telefono = $_POST['telefono'];
$direccion = $_POST['direccion'];
$ciudad = $_POST['ciudad'];

// Password encriptado 
$password1 = password_hash($password, PASSWORD_DEFAULT);

// echo strlen($password1);


$select = "SELECT * FROM clientes WHERE email = ?";
$query = $conn->prepare($select);
$query->execute([$email]);
$result = $query->fetch();

//Comprobar el POST
// echo "<pre>";
// var_dump($result);
// echo "</pre>";

if ($result) {
    echo "El email ya existe";
    die();
}


// Obtener el id de la ciudad
$select = "SELECT id_ciudad FROM ciudades WHERE nombre_ciudad = ?";
$query = $conn->prepare($select);
$query->execute([$ciudad]);
$result = $query->fetch();

// echo "<pre>";
// echo $result['id_ciudad'];
// echo "</pre>";



if (!$result) {
    // Insertar la ciudad
    $insert = "INSERT INTO ciudades (nombre_ciudad) VALUES (?)";
    $query = $conn->prepare($insert);
    $query->execute([$ciudad]);

    // Obtener el id de la ciudad
    $select = "SELECT id_ciudad FROM ciudades WHERE nombre_ciudad = ?";
    $query = $conn->prepare($select);
    $query->execute([$ciudad]);
    $result = $query->fetch();

    // echo "<pre>";
    // echo $result['id_ciudad'];
    // echo "</pre>";
}

$id_ciudad = $result['id_ciudad'];

$insert = "INSERT INTO clientes (nombre_cliente, apellidos_cliente, password, email, nif, telefono, direccion_cliente, id_ciudad) VALUES (?,?,?,?,?,?,?,?)";
$query = $conn->prepare($insert);
$query->execute([$nombre, $apellidos, $password1, $email, $nif, $telefono, $direccion, $id_ciudad]);


$conn = null;
$insert = null;
$select = null;

header('Location: ecommerce.php');