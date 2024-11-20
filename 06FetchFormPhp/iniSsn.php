<?php
    require_once("./conexion.php");

    $idntf = $_POST["identificador"];
    $pswd = $_POST["contrasenia"];

    $consulta = "SELECT idUsuario FROM usuario WHERE nombreUsu = '".$idntf."' OR email = '".$idntf."';";
    try {
        $resultado = $mysqli->query($consulta);

        $fila = $resultado->fetch_assoc();

        if(empty($fila["idUsuario"]))
            throw new Exception("El usuario no está registrado");
        $idUsuario = $fila["idUsuario"];

        try {
            $consulta = "SELECT contrasena FROM usuario WHERE idUsuario = '".$idUsuario."';";

            $resultado = $mysqli->query($consulta);

            $fila = $resultado->fetch_assoc();

            if($pswd === $fila["contrasena"]){
                echo "Inicio Sesión correctamente";
            }
            else
                throw new Exception("Contraseña Incorrecta");
        } catch (Exception $e) {
            $mnsj = $e->getMessage();
            echo $mnsj;
        }

    } catch (Exception $e) {
        $mnsj = $e->getMessage();
        echo $mnsj;
    }
    
?>