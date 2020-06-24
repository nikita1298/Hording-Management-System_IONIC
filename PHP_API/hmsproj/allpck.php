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

 $pckid = "0";
    $uid = "0";
    $pckname = "";
     $out = array();
           $j=0;
$uname="";
$mobno="";
$email="";
    $imaarray = array();
$sql="select * from tbl_seller_package   where delete_status='0' and status!='2'order by seller_package_id desc";
$resilt=mysqli_query($conn,$sql);
//print_r($resilt);
if(mysqli_num_rows($resilt)>0)
{
    
    while ($row= mysqli_fetch_assoc($resilt)){
        
     $pckid = $row['seller_package_id'];
        $uid = $row['user_id'];
        $uer="select * from tbl_user where user_id=$uid";
        $us= mysqli_query($conn, $uer);
       
        while($urs= mysqli_fetch_assoc($us)){
            $uname=$urs['fname']."    ".$urs['lname'];
            $email= $urs['email_id'];
            $mobno=$urs['mobile_number'];
           // echo $uname."===========================";
        }
         //echo $uid;
        $pckname = $row['pck_name'];
        // echo $pckname;
        $area = $row['area_id'];
        $hid = $row['h_type_id'];
        $mid = $row['m_id'];
        $ght=$row['ground_height'];
        $ghm=$row['gh_mesurement'];
        $mna = "";
        $city = "";
        $cityname = "";
        $pin="";
        $hname = "";
        $asq = "select * from tbl_area where area_id=$area";
        $ar = mysqli_query($conn, $asq);
        while ($ars = mysqli_fetch_assoc($ar)) {
            $areaname = $ars['area_name'];
            $city = $ars['city_id'];
            $pin=$ars['pincode'];
        }

        $csqs = mysqli_query($conn, "select * from tbl_city where city_id=$city");
        while ($c = mysqli_fetch_assoc($csqs)) {
            $cityname = $c['city_name'];
            // $city=$c['city_id'];
        }

        $hsqs = mysqli_query($conn, "select * from tbl_hoarding_type where h_type_id=$hid");
        while ($c1 = mysqli_fetch_assoc($hsqs)) {
            $hname = $c1['type_name'];
            // $city=$c['city_id'];
        }

        $msqs = mysqli_query($conn, "select * from tbl_mesurement where m_id=$mid");
        while ($m1 = mysqli_fetch_assoc($msqs)) {
            $mna = $m1['m_type_name'];
            // $city=$c['city_id'];
        }
       // echo $pckid;
        $sqls = "select * from tbl_package_image where delete_status=0 and seller_package_id=$pckid order by image asc";
        $result = mysqli_query($conn, $sqls);
        $i = 0;
        while ($ro = mysqli_fetch_assoc($result)) {
            $i++;
            $imgname = $ro['image'];
          //  echo $imgname;                                                                                           
            //  echo $pckname.$uid;
            $path = "PackageImages/$uid/$pckname/$imgname";
            $type = pathinfo($path, PATHINFO_EXTENSION);
            $data = file_get_contents($path);
               $base64 = 'data:image/jpeg;base64,' . base64_encode($data);
            // $base64 = 'data:image/' . $type . ';base64,' . base64_encode($data);
//echo '<img src="'.$base64.'">';
        
//echo $base64;

            $imaarray =$imaarray+["image$i" => $base64];
            // echo $base64;
            //echo $pckid."\n".$imgname.$row['pck_name'];
        }
        //  $outp=array()
         ///  print_r($imaarray);
        $out[$j] =["userid" => $row['user_id'],
            "area" => $areaname,
            "pckid"=>$pckid,
            "pin"=>$pin,
            "city" => $cityname,
            "ht" => $hname,
            "mt" => $mna,
            "pckname"=>$row['pck_name'],
            "height" => $row['height'],
            "width" => $row['width'],
            "cdate"=>date("d-m-y",strtotime($row['created_on'])),
            "av"=>$row['availability'],
            "gh1"=>$ght,
            "gm1"=>$ghm,
            "tid" => $row['time_duration'],
            "pr" => $row['price'],
            "des" => $row['Description'],
            "uname"=>$uname,
            "email"=>$email,
            "mbno"=>$mobno,
             "img" => $imaarray,
           
        ];
        // echo $j;
     
        $j++;
        // print_r($imaarray['image1']);
           $imaarray=array();
    }
    
     // print_r($out);

   echo json_encode($out);
        
        
        
    
   /*$outp=array();
   $outp=$resilt->fetch_all(MYSQLI_ASSOC);
    echo json_encode($outp);*/
	
}
else{
    echo json_encode("");
}
$conn->close();



?>