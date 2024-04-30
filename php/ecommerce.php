<?php
session_start();
require_once('connection.php');

var_dump($_SESSION);

if (!isset($_SESSION['nombew_cliente'])) {
    header('Location: ../index.php');
}

echo "Hola ".$_SESSION['nombre_cliente']. " ".$_SESSION['apellidos_cliente'];

