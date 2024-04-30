<?php
session_start();
require_once('connection.php');

echo "pedo ".$_SESSION['nombre_cliente']. " ".$_SESSION['apellidos_cliente'];