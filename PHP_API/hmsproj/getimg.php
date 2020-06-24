<?php 
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Header: Origin,Content-Type");
header("access-control-allow-methods:Get,POST,PUT");

/*
$reset_json=file_get_contents("php://input");
//$_POST=json_decode($reset_json,true);
$fns=json_decode($reset_json,true);
*/
//include './hmsfunction.php';

include './config.php';

$name=$_POST['pn'];
$ueid=$_POST['urid'];
$pkname=$_POST['pid'];
//$name=$paname;

 $dir="PackageImages/$ueid";
   mkdir($dir);
     $dirs="PackageImages/$ueid/$name";
      mkdir($dirs);

   if(!is_dir($dir))
   {
 
    if(!is_file($dirs)){
     //mkdir($dirs);

  
    }
   }
   
  $target_path = "PackageImages/$ueid/$name/";
// $target_path="$target_path1/$name/";
$target_path = $target_path .basename( $_FILES['file']['name']);

$iname=$_POST['in'];//$_FILES['file']['tmp_name'];
echo $iname;
$sql="insert into tbl_package_image(seller_package_id,image) values ('.$pkname.','$iname')";
if(mysqli_query($conn, $sql)){

if (move_uploaded_file($_FILES['file']['tmp_name'], $target_path)) {
    echo "Upload and move success $pkname";
   
} else {
//echo $target_path;
    echo "There was an error uploading the file, please try again!";
     $outp="NOTI";
     echo  json_encode($pkname);
}
}
 else {
   $outp="NOT";
  echo  json_encode($lasr."vals".$name."id".$iod);
}/*
$path = 'PackageImages/4/12/120.jpg';
$type = pathinfo($path, PATHINFO_EXTENSION);
$data = file_get_contents($path);
$base64 = 'data:image/' . $type . ';base64,' . base64_encode($data);
//echo $base64;
    
echo '<img src="'.$base64.'" alt="">';
echo $type;

?>














