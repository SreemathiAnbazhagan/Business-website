<?php
$name = $_POST['name'];
$email = $_POST['email'];
$number= $_POST['number'];
$message= $_POST['message'];


$from = 'forms.infysolution.com';
$to = 'sreemathianbazhagan@gmail.com';
$body ="Name: $name.\n".
        "Email: $email.\n".
        "Phone: $number.\n".
        "Message: $message.\n";

$headers = "From : ".$from.
            "Reply-To :".$email;

mail($to,$subject,$body,$headers);
header("Location:contactus.html");
?>