<?php
session_start();
require_once('connection.php');

// var_dump($_SESSION);

if (!isset($_SESSION['nombre_cliente'])) {
    header('Location: ../index.php');
}

echo "Hola " . $_SESSION['nombre_cliente'] . " " . $_SESSION['apellidos_cliente'];

?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <a href="logout.php">Cerrar sesión</a>


</body>

</html>