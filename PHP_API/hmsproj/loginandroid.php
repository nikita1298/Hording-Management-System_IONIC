<?php
include './config.php';

$sql="select user_id,fname  from tbl_user";
$r= mysqli_query($conn, $sql);
if(mysqli_num_rows($r)>0){
  $outp=array();
   $outp=$r->fetch_all(MYSQLI_ASSOC);
  // print_r($outp);
   echo json_encode($outp);
	
}

?>

