<?php
     
$servername="localhost";
$username="root";
$password="";
$db="hoardingms";
$conn= mysqli_connect($servername,$username,$password,$db);
if($conn->connect_error)
{
    die("Connection Error".$conn->Connect_error);
}
else
{
   // echo "HII CONNECTED";
}

   

?>
