<?php
    $servidor = 'sql102.infinityfree.com';
    $usuario = 'if0_37539658';
    $contrasena = 'xVF8QNcqlxXX1';
    $basedatos = 'if0_37539658_tienda';

    $conexion = new mysqli($servidor, $usuario, $contrasena, $basedatos);

    if ($conexion->connect_error) {
        die('Error de conexión: ' . $conexion->connect_error);
    }

    $codigoAdmin = $_POST['codigoAdmin'];
    $codigoProducto = $_POST['codigoProducto'];
    $nombre = $_POST['nombre'];
    $cantidad = $_POST['cantidad'];
    $precioCompra = $_POST['precioCompra'];
    $precioVenta = $_POST['precioVenta'];

?>