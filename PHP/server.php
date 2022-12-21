<?php
    header('Access-Control-Allow-Origin: http://localhost:3000');
    $user = $_POST['name'];
    echo ("Name: $user"."\n");
    $mobile = $_POST['mobile'];
    echo ("\n"."Mobile number: $mobile"."\n");
    $email = $_POST['email'];
    echo ("\n"."Email: $email");
?>