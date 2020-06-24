<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin,Content-Type");
header("access-control-allow-methods:Get,POST,PUT");
 
include 'config.php';
include './hmsfunction.php';

$reset_json=file_get_contents("php://input");
//$_POST=json_decode($reset_json,true);
$fns=json_decode($reset_json,true);

if(isset($fns['fn'])){
$_POST=$fns;

// add($conn);
if(isset($_POST['fn'])&& function_exists($_POST['fn']))
{
	$_POST['fn']($conn);
       
}
}
//forgetpss($conn);
//sendSms($conn);
//member($conn);

/*  $currentDateTime = date('Y-m-d ');
  echo $currentDateTime;
  
$date = new DateTime($currentDateTime);
$date->add(new DateInterval('P10M'));
echo $date->format('Y-m-d') . "\n";
  echo $currentDateTime('d/m/Y','+2 months');
//approvepack($conn);

//addpck($conn);

//login($conn);*/
/*
if(file_exists("PackageImages")){
    $filename="PackageImages/4";
    if(!file_exists($filename)){
        echo "NOOO";
    }
    echo "yes";
}*/
?>

















