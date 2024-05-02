<?php
session_start();
require_once('connection.php');

// var_dump($_SESSION);

// if (!isset($_SESSION['email'])) {
//     header('Location: ../index.php');
// }

echo "Hola ".$_SESSION['nombre']." ".$_SESSION['apellidos'];

?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<a href="logout.php">Cerrar Sesión</a>    

</body>
</html>