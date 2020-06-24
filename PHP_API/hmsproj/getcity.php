<?php


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Header: Origin,Content-Type");
header("access-control-allow-methods:Get,POST,PUT");
//echo "HElLO WORLD";
include './config.php';
$conn= mysqli_connect($servername,$username,$password,$db);
if($conn->connect_error)
{
    die("Connection Error".$conn->Connect_error);
}
else
{
   // echo "HII CONNECTED";
}
$sql="select * from tbl_city";
        $resilt=mysqli_query($conn,$sql);
if(mysqli_num_rows($resilt)>0)
{
   $outp=array();
   $outp=$resilt->fetch_all(MYSQLI_ASSOC);
    echo json_encode($outp);
	
}
else{
    echo json_encode("");
}
$conn->close();



?>