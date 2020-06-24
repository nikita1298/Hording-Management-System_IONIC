<?php

function add($conn) {
    echo 'hrllosbdnbn';
    $email = $_POST["ema"];
    $pass = $_POST["pa"];
    if ($email != null && $pass != null) {
        $sql = 'insert into  user(email,pass) values("' . $email . '","' . $pass . '")';
        if ($conn->query($sql) == TRUE) {

            $outp = "Inserted Value";
            echo json_encode($outp);
        } else {
            echo json_encode("0 Records");
        }
    }
}

function reg($conn) {
    $email = $_POST['email'];
    $mno = $_POST['mbo'];
    $email = strtolower($email);
    $e = 0;
    $m = 0;
    if ($email != NULL && $mno != NULL) {
        $sql = 'select * from tbl_user where email_id="' . $email . '" '; //and mobile_number="' . $pass . '"';
        $r = mysqli_query($conn, $sql);
        if (mysqli_num_rows($r) > 0) {
            $e = 1;
        }
        $sql1 = 'select * from tbl_user where  mobile_number="' . $mno . '"';
        $r1 = mysqli_query($conn, $sql1);
        if (mysqli_num_rows($r1) > 0) {
            $m = 1;
        }
        if ($e == 1 && $m == 1) {
            $outp = "i";
            //echo json_encode($outp);
        } elseif ($e == 1) {
            $outp = "e";
        } elseif ($m == 1) {
            $outp = "m";
        } elseif ($e == 0 && $m == 0) {
            $ut = $_POST['uty'];
            $fname = $_POST['fname'];
            $lname = $_POST['lname'];
            $add = $_POST['add'];
            $pas = md5($_POST['pass']);
            $sqls = "insert into tbl_user(user_type,fname,lname,address,mobile_number,email_id,password) values(?,?,?,?,?,?,?)";
            $st = $conn->prepare($sqls);
            $st->bind_param("issssss", $ut, $fname, $lname, $add, $mno, $email, $pas);
            if ($st->execute()) {
                $outp =  $conn->insert_id;
            }
        } else {
            
        }
        echo json_encode($outp);
    }
}

function login($conn) {
    $email = 'a@gmail.com'; //$_POST['ema'];
    $pas = 'abcd'; //$_POST['pas'];

    if ($email != NULL && $pas != NULL) {

        $sqls = "select user_type,user_id from tbl_user where email_id=? and password=?";
        $st = $conn->prepare($sqls);
        $email = $_POST['ema'];
        $pas = $_POST['pas'];
        $st->bind_param("ss", $email, $pas);
        $st->execute();
        $d = $st->get_result();
        $st->fetch();
        $arr = array();
        $arr = $d->fetch_all(MYSQLI_ASSOC);
        $c = mysqli_num_rows($d);
        if ($c == 1) {
            // echo $email;

            $ty = $arr[0];

            $outp = $arr;

            //print_r($ty);
        } else {
            $outp = "N";
        }
        echo json_encode($outp);
    }
}

function addhtype($conn) {
    $tn = $_POST['tname'];
    $td = $_POST['tdesc'];
    $tn = strtolower($tn);
    $e = 0;
    $m = 0;
    if ($tn != NULL && $td != NULL) {
        $sql = 'select * from tbl_hoarding_type where type_name="' . $tn . '" '; //and mobile_number="' . $pass . '"';
        $r = mysqli_query($conn, $sql);
        if (mysqli_num_rows($r) > 0) {
            $e = 1;
        }

        if ($e == 1) {
            $outp = "u";
            //echo json_encode($outp);
        } else {
            $sqls = "insert into tbl_hoarding_type(type_name,h_desc) values(?,?)";
            $st = $conn->prepare($sqls);
            $st->bind_param("ss", $tn, $td);
            if ($st->execute()) {
                $outp = 's';
            }
        }
        $outp = $tn;
        echo json_encode($outp);
    }
}

function addplan($conn) {
    $amt = $_POST['amt'];
    $dur = $_POST['dur'];
    $act = $_POST['act'];
    $uty1 = $_POST['uty'];
    $sqls = "insert into tbl_plans(user_type,amount,time_duration,apply_status) values(?,?,?,?)";
    $st = $conn->prepare($sqls);
    $st->bind_param("iiss", $uty1, $amt, $dur, $act);
    if ($st->execute()) {
        $outp = 's';
    }
    echo json_encode($outp);
}

function planamt($conn) {
    $plans = $_POST['sp'];
    $sqls = "select amount from tbl_plans where plan_id=? ";
    $st = $conn->prepare($sqls);
    $st->bind_param("s", $plans);
    $st->execute();
    $d = $st->get_result();
    $st->fetch();
    $arr = array();
    $arr = $d->fetch_all(MYSQLI_ASSOC);
    //  print_r($arr);
    if (mysqli_num_rows($d) > 0) {
        $outp = $arr;
    }
    echo json_encode($arr);
}

function addpck($conn) {

    /* let prm={fn:'addpck'
      ,usera_id:this.vals,ar_id:this.area,h_id:this.htid,m_id:this.mtid,
      pckname:this.pckname.value,width:this.pckw,height:this.pckh.value,
      ava:this.avid,af:this.todays.value,td:this.pckm.value,price:this.pckpr.value,
      des:this.pckdes.value};
     *    $userid=3;//$_POST['user_id'];
      $area_id=3;//$_POST['ar_id'];
      $htid=1;//$_POST['h_id'];
      $mid=1;//$_POST['m_id'];
      $pname='myp';//$_POST['pckname'];
      $w='12';//$_POST['width'];
      $h='12';//$_POST['height'];
      $av='y';//$_POST['ava'];
      $avf='00-00-00';//$_POST['af'];
      $ti='6';//$_POST['td'];
      $p=120;//$_POST['price'];
      $des='bnbs';//$_POST['des'];
     */
    $userid = $_POST['use_id'];
    $area_id = $_POST['ar_id'];
    $htid = $_POST['h_id'];
    $mid = $_POST['m_id'];
    $pname = $_POST['pckname'];
    $paname = $pname;
    $w = $_POST['width'];
    $h = $_POST['height'];
    $ght = $_POST['ght'];
    $ghm = $_POST['ghm'];
    $av = $_POST['ava'];
    $ti = $_POST['td'];
    $p = $_POST['price'];
    $iod = $userid;
    $des = 'bnbs'; //$_POST['des'];
    //mkdir("PackageImages/$name");
    $sqls = "insert into tbl_seller_package(user_id, area_id, h_type_id, m_id, pck_name, width, height,ground_height,gh_mesurement,availability,available_from,time_duration,price,description) values(?,?,?,?,?,?,?,?,?,?,?,?)";
    $st = $conn->prepare($sqls);
    $st->bind_param("iiiisssisssis", $userid, $area_id, $htid, $mid, $pname, $w, $h, $ght, $ghm, $av, $ti, $p, $des);
    if ($st->execute()) {
        $lasr = $conn->insert_id;

        $outp = $lasr; //$img;
        $arr = array("lid" => $lasr); //array();
        // $arr->lid=$lasr;
        //  $arr= array_values();
        //print_r($arr) ;
    } else {
        $outp = $area_id;
    }
    echo json_encode($arr);
}

include './config.php';

//addpck();
function approvepack($conn) {
    $r = $_POST['id'];

    $sql = "update  tbl_seller_package set status='2' where seller_package_id='" . $r . "'";
    mysqli_query($conn, $sql);
    $outp = "SUSCESS";
    echo json_encode($outp);
}

function rejectpack($conn) {
    $r = $_POST['id'];

    $sql = "update  tbl_seller_package set status='1' where seller_package_id='" . $r . "'";
    mysqli_query($conn, $sql);
    $outp = "SUSCESS";
    echo json_encode($outp);
}

function member($conn) {
   $uid = $_POST['uid'];
    $ut = $_POST['ut'];
    $du = $_POST['dur'];
   // $ti = '6'; //$_POST['ti'];
   // $pi = $_POST['pid'];
//$du=1;
$enddate=date('d/m/Y', strtotime("+$du months"));

$date = explode('/', $enddate);
$time = mktime(0,0,0,$date[0],$date[1],$date[2]);
$mysqldate = date( 'Y-m-d H:i:s', $time );
//echo $mysqldate;

$sql="insert into tbl_membership(user_id,user_type,end_date) values('".$uid."','".$ut."','".$enddate."')";
if(mysqli_query($conn, $sql)){
    $out= $conn->insert_id;
    echo json_encode($out);
}
 else {
      $out="mbs";
   
      echo json_encode($out);

}

     
}
function  payment($conn){
    $mb=17;//$_POST['mb'];
    $plid=1;//$_POST['plid'];
    $amts=300;//$_POST['amts'];
    $sql="insert into tbl_payment(member_id,plan_id,p_amount) values('".$mb."','".$plid."','".$amts."')";
    mysqli_query($conn, $sql);
    if(mysqli_query($conn, $sql)){
        echo json_encode("ss");
    }
 else {
        echo json_encode($plid.$mb.$amts);
     
    }
}
//payment($conn);
//member($conn);

function profile() {
    $iid = $_POST['ids'];
}

function sendSms($conn) {




    $digits_needed = 7;

    $random_number = ''; // set up a blank string

    $count = 0;

    while ($count < $digits_needed) {
        $random_digit = mt_rand(0, 9);

        $random_number .= $random_digit;
        $count++;
    }

    //$mno=$_POST['mno'];
    //$otp=$_POST['msg'];
    $otp = $random_number;

    $mobileNo = $_POST['mno'];
    $message = urlencode($random_number . "   is your HMS verification code");
    $authKey = "241052AOOmuERryn5bb5e888";
    $senderId = "Default";
    $route = "1";
    $postData = array(
        'authkey' => $authKey,
        'mobiles' => $mobileNo,
        'message' => $message,
        'sender' => $senderId,
        'route' => $route,
        'country' => '0'
    );
    $url = "https://control.msg91.com/api/sendhttp.php";
    $ch = curl_init();
    curl_setopt_array($ch, array(
        CURLOPT_URL => $url,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_POST => true,
        CURLOPT_POSTFIELDS => $postData
    ));
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
    $output = curl_exec($ch);
    if (curl_errno($ch)) {
        echo 'error:' . curl_error($ch);
        echo json_encode("MESSAGE error");
    } else {
        echo json_encode($otp);
    }
    curl_close($ch);
//echo '<script>alert("Message sent Successfully")</script>';
    echo json_encode($otp);
}

function forgetpss($conn) {
    $em = $_POST['emas'];
    $sql = 'select * from tbl_user where email_id=?';
    $rs = mysqli_query($conn, $sql);
    //$arr=array();
    // $arr=$rs->fetch_all(MYSQLI_ASSOC);
    // echo json_encode($arr);
    $st = $conn->prepare($sql);
    $st->bind_param("s", $em);
    $st->execute();
    $d = $st->get_result();
    $st->fetch();
    $arr = array();
    $arr = $d->fetch_all(MYSQLI_ASSOC);
    $c = mysqli_num_rows($d);
    //print_r($arr);
    echo json_encode($arr);
}
function  change($conn){
    $mno=$_POST['mno'];
    $npass=$_POST['npass'];
    mysqli_query($conn, "update tbl_user set password=$npass where mobile_number=$mno");
    $out='s';
    echo json_encode($out);
}
function allpck($conn) {
    $sql = "select * from tbl_seller_package where  status='2' and availability='y' and delete_status=0";
    $rs = mysqli_query($conn, $sql);
    $pckid = "0";
    $uid = "0";
    $pckname = "";
    $out = array();
    $j = 0;

    $imaarray = array();
    while ($row = mysqli_fetch_assoc($rs)) {
        $pckid = $row['seller_package_id'];
        $uid = $row['user_id'];
        //echo $uid;
        $pckname = $row['pck_name'];
        // echo $pckname;
        $area = $row['area_id'];
        $hid = $row['h_type_id'];
        $mid = $row['m_id'];
        $ght = $row['ground_height'];
        $ghm = $row['gh_mesurement'];
        $mna = "";
        $city = "";
        $cityname = "";
        $pin = "";
        $hname = "";
        $asq = "select * from tbl_area where area_id=$area";
        $ar = mysqli_query($conn, $asq);
        while ($ars = mysqli_fetch_assoc($ar)) {
            $areaname = $ars['area_name'];
            $city = $ars['city_id'];
            $pin = $ars['pincode'];
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

            $imaarray = $imaarray + ["image$i" => $base64];
            // echo $base64;
            //echo $pckid."\n".$imgname.$row['pck_name'];
        }
        //  $outp=array()
        ///  print_r($imaarray);
        $out[$j] = ["userid" => $row['user_id'],
            "area" => $areaname,
            "pckid" => $pckid,
            "pin" => $pin,
            "city" => $cityname,
            "ht" => $hname,
            "mt" => $mna,
            "height" => $row['height'],
            "width" => $row['width'],
            "gh1" => $ght,
            "gm1" => $ghm,
            "tid" => $row['time_duration'],
            "pr" => $row['price'],
            "des" => $row['Description'],
            "img" => $imaarray
        ];
        // echo $j;

        $j++;
        // print_r($imaarray['image1']);
        $imaarray = array();
    }

    // print_r($out);

    echo json_encode($out);
    // echo '<img src="'.$out[0]['img']['image2'].'">';
    //    echo '<img src="'.$out[1]['img']['image2'].'"> ';
}

//allpck($conn);
function sendreq($conn) {
    $spid = $_POST['spid'];
    $lurid = $_POST['lurid'];
    $urtd = $_POST['urtd'];
    $sql = "insert into tbl_request_package(seller_package_id,user_id,time_duration,status) values($spid,$lurid,$urtd,'a')";
    if (mysqli_query($conn, $sql)) {
        ;
        echo json_encode("s");
    }
}

function addlist($conn) {
    $urtd = $_POST['ur'];
    $spi = $_POST['spi'];

    $sql = "insert into tbl_list(user_id,seller_package_id) values($urtd,$spi)";
    if (mysqli_query($conn, $sql)) {
        echo json_encode("s");
    }
}

//addlist($conn);
function pnewreq($conn) {
    $uid = $_POST['uid'];
    $imaarray = array();
    $j = 0;
    $userrqeid = "";
    $sql = "select * from tbl_seller_package where status='2' and  delete_status=0 and  user_id=$uid";
    $rs = mysqli_query($conn, $sql);
    while ($row = mysqli_fetch_assoc($rs)) {
        $pckid = $row['seller_package_id'];
        $sqls = "select * from tbl_request_package where delete_status=0 and status!='y' and seller_package_id=$pckid";
        $rss = mysqli_query($conn, $sqls);
        while ($rr = mysqli_fetch_assoc($rss)) {
            // $pckid = $row['seller_package_id'];
            //$uid = $row['user_id'];
            //echo $uid;
            $userrqeid = $rr['request_id'];
            //echo $userrqeid;
            $pckname = $row['pck_name'];
            $rf = $rr['time_duration'];
            // echo $pckname;
            $area = $row['area_id'];
            $hid = $row['h_type_id'];
            $mid = $row['m_id'];
            $ght = $row['ground_height'];
            $ghm = $row['gh_mesurement'];
            $mna = "";
            $city = "";
            $cityname = "";
            $pin = "";
            $hname = "";
            $asq = "select * from tbl_area where area_id=$area";
            $ar = mysqli_query($conn, $asq);
            while ($ars = mysqli_fetch_assoc($ar)) {
                $areaname = $ars['area_name'];
                $city = $ars['city_id'];
                $pin = $ars['pincode'];
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

                $imaarray = $imaarray + ["image$i" => $base64];
                // echo $base64;
                //echo $pckid."\n".$imgname.$row['pck_name'];
            }
            $date = $rr['request_date'];
            //  echo date("d-m-y",strtotime($date)); // 
            //  $outp=array()
            ///  print_r($imaarray);
            $out[$j] = ["userid" => $row['user_id'],
                "area" => $areaname,
                "pckname" => $pckname,
                "pckid" => $pckid,
                "pin" => $pin,
                "reqid" => $userrqeid,
                "city" => $cityname,
                "ht" => $hname,
                "mt" => $mna,
                "height" => $row['height'],
                "width" => $row['width'],
                "gh1" => $ght,
                "gm1" => $ghm,
                "rfor" => $rf,
                "reqdate" => date("d-m-y", strtotime($date)),
                "tid" => $row['time_duration'],
                "pr" => $row['price'],
                "des" => $row['Description'],
                "img" => $imaarray
            ];

            $imaarray = array();
            $j++;
            //echo "jjj  $j";
        }
        /* echo  $row['pck_name'];
          echo $rr['request_id']; */
    }

    echo json_encode($out);
}

//pnewreq($conn);

function proreqresponse($conn) {
    $reqid = $_POST['ids'];
    $st = $_POST['resst'];

    /* $sqls="select * from tbl_request_package  where request_id=$reqid";
      $rs=mysqli_query($conn, $sqls);
      if(mysqli_num_rows($rs)>0){
      while ($row= mysqli_fetch_assoc($rs))
      {
      if($st==$row)
      }

      } */
    $sql = "update tbl_request_package  set status='" . $st . "' where request_id='" . $reqid . "'";
    if (mysqli_query($conn, $sql)) {
        echo json_encode("s");
    } else {
        echo json_encode("fdhdjhjj");
    }
}

function approvereq($conn) {
    $uid = $_POST['uid'];
    $imaarray = array();
    $j = 0;
    //echo $uid;
    $userrqeid = "";
    $sql = "select * from tbl_seller_package where status='2' and delete_status=0 and  user_id=$uid";
    $rs = mysqli_query($conn, $sql);
    while ($row = mysqli_fetch_assoc($rs)) {
        $pckid = $row['seller_package_id'];
        $sqls = "select * from tbl_request_package where delete_status=0 and status='y' and seller_package_id=$pckid";
        $rss = mysqli_query($conn, $sqls);
        while ($rr = mysqli_fetch_assoc($rss)) {
            // $pckid = $row['seller_package_id'];
            //$uid = $row['user_id'];
            //echo $uid;
            $cid = $rr['user_id'];
            //  echo $cid;
            $csql = "select * from tbl_user where user_id=$cid";
            $crs = mysqli_query($conn, $csql);
            while ($cro = mysqli_fetch_assoc($crs)) {
                $uname = $cro['fname'] . "    " . $cro['lname'];
                $email = $cro['email_id'];
                $mobno = $cro['mobile_number'];
                //echo $mobno;
            }
            $userrqeid = $rr['request_id'];
            //echo $userrqeid;
            $pckname = $row['pck_name'];
            $rf = $rr['time_duration'];
            // echo $pckname;
            $area = $row['area_id'];
            $hid = $row['h_type_id'];
            $mid = $row['m_id'];
            $ght = $row['ground_height'];
            $ghm = $row['gh_mesurement'];
            $mna = "";
            $city = "";
            $cityname = "";
            $pin = "";
            $hname = "";
            $asq = "select * from tbl_area where area_id=$area";
            $ar = mysqli_query($conn, $asq);
            while ($ars = mysqli_fetch_assoc($ar)) {
                $areaname = $ars['area_name'];
                $city = $ars['city_id'];
                $pin = $ars['pincode'];
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

                $imaarray = $imaarray + ["image$i" => $base64];
                // echo $base64;
                //echo $pckid."\n".$imgname.$row['pck_name'];
            }
            $date = $rr['request_date'];
            //  echo date("d-m-y",strtotime($date)); // 
            //  $outp=array()
            ///  print_r($imaarray);
            $out[$j] = ["userid" => $row['user_id'],
                "area" => $areaname,
                "pckname" => $pckname,
                "pckid" => $pckid,
                "pin" => $pin,
                "reqid" => $userrqeid,
                "city" => $cityname,
                "ht" => $hname,
                "mt" => $mna,
                "height" => $row['height'],
                "width" => $row['width'],
                "gh1" => $ght,
                "gm1" => $ghm,
                "rfor" => $rf,
                "reqdate" => date("d-m-y", strtotime($date)),
                "tid" => $row['time_duration'],
                "pr" => $row['price'],
                "des" => $row['Description'],
                "cname" => $uname,
                "cemail" => $email,
                "cmbno" => $mobno,
                "img" => $imaarray
            ];

            $imaarray = array();
            $j++;
            //echo "jjj  $j";
        }
        /* echo  $row['pck_name'];
          echo $rr['request_id']; */
    }

    echo json_encode($out);
}

//approvereq($conn);
//clienapprove($conn);
function clienapprove($conn) {
    $out = "";
    $uidd = 3; //$_POST['uid'];
    $imaarray = array();
    $j = 0;
    // echo $uidd;
    $sqlss = "select * from tbl_request_package where delete_status=0 and status='y' and user_id=$uidd";

    $userrqeid = "";
    $rs = mysqli_query($conn, $sqlss);
    while ($row = mysqli_fetch_assoc($rs)) {
        $pckid = $row['seller_package_id'];
        $sql = "select * from tbl_seller_package where status='2' and delete_status=0 and  seller_package_id=$pckid";
        //echo $uidd;
        $rss = mysqli_query($conn, $sql);
        while ($rr = mysqli_fetch_assoc($rss)) {
            // $pckid = $row['seller_package_id'];
            $uid = $rr['user_id'];
            //echo $uid;
            $proid = $rr['user_id'];
            //  echo $cid;
            $csql = "select * from tbl_user where user_id=$proid";
            $crs = mysqli_query($conn, $csql);
            while ($cro = mysqli_fetch_assoc($crs)) {
                $uname = $cro['fname'] . "    " . $cro['lname'];
                $email = $cro['email_id'];
                $mobno = $cro['mobile_number'];
                //echo $mobno;
            }
            $userrqeid = $row['request_id'];
            //echo $userrqeid;
            $pckname = $rr['pck_name'];
            $rf = $rr['time_duration'];
            // echo $pckname;
            $area = $rr['area_id'];
            $hid = $rr['h_type_id'];
            $mid = $rr['m_id'];
            $ght = $rr['ground_height'];
            $ghm = $rr['gh_mesurement'];
            $mna = "";
            $city = "";
            $cityname = "";
            $pin = "";
            $hname = "";
            $asq = "select * from tbl_area where area_id=$area";
            $ar = mysqli_query($conn, $asq);
            while ($ars = mysqli_fetch_assoc($ar)) {
                $areaname = $ars['area_name'];
                $city = $ars['city_id'];
                $pin = $ars['pincode'];
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

                $imaarray = $imaarray + ["image$i" => $base64];
                // echo $base64;
                //echo $pckid."\n".$imgname.$row['pck_name'];
            }
            $date = $row['modified_on'];
            //  echo date("d-m-y",strtotime($date)); // 
            //  $outp=array()
            ///  print_r($imaarray);
            $out[$j] = ["userid" => $row['user_id'],
                "area" => $areaname,
                "pckname" => $pckname,
                "pckid" => $pckid,
                "pin" => $pin,
                "reqid" => $userrqeid,
                "city" => $cityname,
                "ht" => $hname,
                "mt" => $mna,
                "height" => $rr['height'],
                "width" => $rr['width'],
                "gh1" => $ght,
                "gm1" => $ghm,
                "rfor" => $rf,
                "reqdate" => date("d-m-y", strtotime($date)),
                "tid" => $rr['time_duration'],
                "pr" => $rr['price'],
                "des" => $rr['Description'],
                "cname" => $uname,
                "cemail" => $email,
                "cmbno" => $mobno,
                "img" => $imaarray
            ];
            //echo $uid;

            $imaarray = array();
            $j++;
            //echo "jjj  $j";
        }
        /* echo  $row['pck_name'];
          echo $rr['request_id']; */
    }

    echo json_encode($out);
}

//clienapprove($conn);
function clientpenreq($conn) {
    $out = "";
    $uidd = $_POST['uid'];
    $imaarray = array();
    $j = 0;
    //echo $uid;
    $sqlss = "select * from tbl_request_package where delete_status=0 and status=' ' and user_id=$uidd";

    $userrqeid = "";
    $rs = mysqli_query($conn, $sqlss);
    while ($row = mysqli_fetch_assoc($rs)) {
        $pckid = $row['seller_package_id'];
        $sql = "select * from tbl_seller_package where status='2' and delete_status=0 and  seller_package_id=$pckid";

        $rss = mysqli_query($conn, $sql);
        while ($rr = mysqli_fetch_assoc($rss)) {
            // $pckid = $row['seller_package_id'];
            $uid = $rr['user_id'];
            //echo $uid;
            $proid = $rr['user_id'];
            //  echo $cid;
            /*  $csql="select * from tbl_user where user_id=$proid";
              $crs= mysqli_query($conn,$csql);
              while ($cro= mysqli_fetch_assoc($crs)){
              $uname=$cro['fname']."    ".$cro['lname'];
              $email= $cro['email_id'];
              $mobno=$cro['mobile_number'];
              //echo $mobno;

              } */
            $userrqeid = $row['request_id'];
            //echo $userrqeid;
            $pckname = $rr['pck_name'];
            $rf = $rr['time_duration'];
            // echo $pckname;
            $area = $rr['area_id'];
            $hid = $rr['h_type_id'];
            $mid = $rr['m_id'];
            $ght = $rr['ground_height'];
            $ghm = $rr['gh_mesurement'];
            $mna = "";
            $city = "";
            $cityname = "";
            $pin = "";
            $hname = "";
            $asq = "select * from tbl_area where area_id=$area";
            $ar = mysqli_query($conn, $asq);
            while ($ars = mysqli_fetch_assoc($ar)) {
                $areaname = $ars['area_name'];
                $city = $ars['city_id'];
                $pin = $ars['pincode'];
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

                $imaarray = $imaarray + ["image$i" => $base64];
                // echo $base64;
                //echo $pckid."\n".$imgname.$row['pck_name'];
            }
            $date = $row['modified_on'];
            //  echo date("d-m-y",strtotime($date)); // 
            //  $outp=array()
            ///  print_r($imaarray);
            $out[$j] = ["userid" => $row['user_id'],
                "area" => $areaname,
                "pckname" => $pckname,
                "pckid" => $pckid,
                "pin" => $pin,
                "reqid" => $userrqeid,
                "city" => $cityname,
                "ht" => $hname,
                "mt" => $mna,
                "height" => $rr['height'],
                "width" => $rr['width'],
                "gh1" => $ght,
                "gm1" => $ghm,
                "rfor" => $rf,
                "reqdate" => date("d-m-y", strtotime($date)),
                "tid" => $rr['time_duration'],
                "pr" => $rr['price'],
                "des" => $rr['Description'],
                // "cname"=>$uname,
                //"cemail"=>$email,
                //"cmbno"=>$mobno,
                "img" => $imaarray
            ];
            //echo $uid;

            $imaarray = array();
            $j++;
            //echo "jjj  $j";
        }
        /* echo  $row['pck_name'];
          echo $rr['request_id']; */
    }

    echo json_encode($out);
}

//clientpenreq($conn);
function clidelreq($conn) {
    $reqid = $_POST['reqid'];
    $sql = "update tbl_request_package set delete_status=1 where request_id=$reqid";
    if (mysqli_query($conn, $sql)) {
        echo json_encode("s");
    } else {
        echo json_encode("n");
    }
}

//clirejrej($conn);
function clirejrej($conn) {

    $out = "";
    $uidd = 3; //$_POST['uid'];
    $imaarray = array();
    $j = 0;
    //echo $uid;
    $sqlss = "select * from tbl_request_package where delete_status=0 and status='n' and user_id=$uidd";

    $userrqeid = "";
    $rs = mysqli_query($conn, $sqlss);
    while ($row = mysqli_fetch_assoc($rs)) {
        $pckid = $row['seller_package_id'];
        $sql = "select * from tbl_seller_package where status='2' and delete_status=0 and  seller_package_id=$pckid";
        //       echo $uidd;

        $rss = mysqli_query($conn, $sql);
        while ($rr = mysqli_fetch_assoc($rss)) {
            // $pckid = $row['seller_package_id'];
            $uid = $rr['user_id'];
            //  echo $uid;
            $proid = $rr['user_id'];
            //  echo $cid;
            /*  $csql="select * from tbl_user where user_id=$proid";
              $crs= mysqli_query($conn,$csql);
              while ($cro= mysqli_fetch_assoc($crs)){
              $uname=$cro['fname']."    ".$cro['lname'];
              $email= $cro['email_id'];
              $mobno=$cro['mobile_number'];
              //echo $mobno;

              } */
            $userrqeid = $row['request_id'];
            //echo $userrqeid;
            $pckname = $rr['pck_name'];
            $rf = $rr['time_duration'];
            // echo $pckname;
            $area = $rr['area_id'];
            $hid = $rr['h_type_id'];
            $mid = $rr['m_id'];
            $ght = $rr['ground_height'];
            $ghm = $rr['gh_mesurement'];
            $mna = "";
            $city = "";
            $cityname = "";
            $pin = "";
            $hname = "";
            $asq = "select * from tbl_area where area_id=$area";
            $ar = mysqli_query($conn, $asq);
            while ($ars = mysqli_fetch_assoc($ar)) {
                $areaname = $ars['area_name'];
                $city = $ars['city_id'];
                $pin = $ars['pincode'];
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

                $imaarray = $imaarray + ["image$i" => $base64];
                // echo $base64;
                //echo $pckid."\n".$imgname.$row['pck_name'];
            }
            $date = $row['modified_on'];
            //  echo date("d-m-y",strtotime($date)); // 
            //  $outp=array()
            ///  print_r($imaarray);
            $out[$j] = ["userid" => $row['user_id'],
                "area" => $areaname,
                "pckname" => $pckname,
                "pckid" => $pckid,
                "pin" => $pin,
                "reqid" => $userrqeid,
                "city" => $cityname,
                "ht" => $hname,
                "mt" => $mna,
                "height" => $rr['height'],
                "width" => $rr['width'],
                "gh1" => $ght,
                "gm1" => $ghm,
                "rfor" => $rf,
                "reqdate" => date("d-m-y", strtotime($date)),
                "tid" => $rr['time_duration'],
                "pr" => $rr['price'],
                "des" => $rr['Description'],
                // "cname"=>$uname,
                //"cemail"=>$email,
                //"cmbno"=>$mobno,
                "img" => $imaarray
            ];
            //echo $uid;

            $imaarray = array();
            $j++;
            //echo "jjj  $j";
        }
        /* echo  $row['pck_name'];
          echo $rr['request_id']; */
    }

    echo json_encode($out);
}

//clirejrej($conn);
function adminapprove($conn) {

    $pckid = "0";
    $uid = "0";
    $pckname = "";
    $out = array();
    $j = 0;
    $uname = "";
    $mobno = "";
    $email = "";
    $imaarray = array();
    $sql = "select * from tbl_seller_package   where delete_status='0' and status='2'order by seller_package_id desc";
    $resilt = mysqli_query($conn, $sql);
//print_r($resilt);
    if (mysqli_num_rows($resilt) > 0) {

        while ($row = mysqli_fetch_assoc($resilt)) {

            $pckid = $row['seller_package_id'];
            $uid = $row['user_id'];
            $uer = "select * from tbl_user where user_id=$uid";
            $us = mysqli_query($conn, $uer);

            while ($urs = mysqli_fetch_assoc($us)) {
                $uname = $urs['fname'] . "    " . $urs['lname'];
                $email = $urs['email_id'];
                $mobno = $urs['mobile_number'];
                // echo $uname."===========================";
            }
            //echo $uid;
            $pckname = $row['pck_name'];
            // echo $pckname;
            $area = $row['area_id'];
            $hid = $row['h_type_id'];
            $mid = $row['m_id'];
            $ght = $row['ground_height'];
            $ghm = $row['gh_mesurement'];
            $mna = "";
            $city = "";
            $cityname = "";
            $pin = "";
            $hname = "";
            $asq = "select * from tbl_area where area_id=$area";
            $ar = mysqli_query($conn, $asq);
            while ($ars = mysqli_fetch_assoc($ar)) {
                $areaname = $ars['area_name'];
                $city = $ars['city_id'];
                $pin = $ars['pincode'];
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

                $imaarray = $imaarray + ["image$i" => $base64];
                // echo $base64;
                //echo $pckid."\n".$imgname.$row['pck_name'];
            }
            //  $outp=array()
            ///  print_r($imaarray);
            $out[$j] = ["userid" => $row['user_id'],
                "area" => $areaname,
                "pckid" => $pckid,
                "pin" => $pin,
                "city" => $cityname,
                "ht" => $hname,
                "mt" => $mna,
                "pckname" => $row['pck_name'],
                "height" => $row['height'],
                "width" => $row['width'],
                "cdate" => date("d-m-y", strtotime($row['created_on'])),
                "av" => $row['availability'],
                "gh1" => $ght,
                "gm1" => $ghm,
                "tid" => $row['time_duration'],
                "pr" => $row['price'],
                "des" => $row['Description'],
                "uname" => $uname,
                "email" => $email,
                "mbno" => $mobno,
                "img" => $imaarray,
            ];
            // echo $j;

            $j++;
            // print_r($imaarray['image1']);
            $imaarray = array();
        }

        // print_r($out);

        echo json_encode($out);




        /* $outp=array();
          $outp=$resilt->fetch_all(MYSQLI_ASSOC);
          echo json_encode($outp); */
    } else {
        echo json_encode("");
    }
    $conn->close();
}

//adminapprove($conn);

function rejectpackag($conn) {
    $r = $_POST['id'];

    $sql = "update  tbl_seller_package set status='1' where  seller_package_id= $r";
    if (mysqli_query($conn, $sql)) {
        $outp = $r;
        echo json_encode($outp);
    }
}

function avai($conn){

    $sql = "select * from  tbl_seller_package  where delete_status='0' and status='2' and availability='y'";
  
    $rs = mysqli_query($conn, $sql);
    $pckid = "0";
    $uid = "0";
    $pckname = "";
    $out = array();
    $j = 0;

    $imaarray = array();
    while ($row = mysqli_fetch_assoc($rs)) {
        $pckid = $row['seller_package_id'];

        $uid = $row['user_id'];
        $rus = mysqli_query($conn, "select * from tbl_user where user_id=$uid");
        while ($ru = mysqli_fetch_assoc($rus)) {
            $uname = $ru['fname']."  ".$ru['lname'];
            $uem = $ru['email_id'];
            $mno = $ru['mobile_number'];
        }

        //echo $uid;
        $pckname = $row['pck_name'];
        // echo $pckname;
        $area = $row['area_id'];
        $hid = $row['h_type_id'];
        $mid = $row['m_id'];
        $ght = $row['ground_height'];
        $ghm = $row['gh_mesurement'];
        $mna = "";
        $city = "";
        $cityname = "";
        $pin = "";
        $hname = "";
        $asq = "select * from tbl_area where area_id=$area";
        $ar = mysqli_query($conn, $asq);
        while ($ars = mysqli_fetch_assoc($ar)) {
            $areaname = $ars['area_name'];
            $city = $ars['city_id'];
            $pin = $ars['pincode'];
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

            $imaarray = $imaarray + ["image$i" => $base64];
            // echo $base64;
            //echo $pckid."\n".$imgname.$row['pck_name'];
        }
        //  $outp=array()
        ///  print_r($imaarray);
        $out[$j] = ["userid" => $row['user_id'],
            "area" => $areaname,
            "pckid" => $pckid,
            "pin" => $pin,
            "city" => $cityname,
            "ht" => $hname,
            "mt" => $mna,
            "height" => $row['height'],
            "width" => $row['width'],
            "gh1" => $ght,
            "gm1" => $ghm,
            "pckname" => $row['pck_name'],
            "tid" => $row['time_duration'],
            "pr" => $row['price'],
            "des" => $row['Description'],
            "cdate" => date("d-m-y", strtotime($row['created_on'])),
            "uname" => $uname,
            "mno" => $mno,
            "em" => $uem,
           "img" => $imaarray
        ];
        // echo $j;

        $j++;
        // print_r($imaarray['image1']);
        $imaarray = array();
    }
    echo json_encode($out);
  }
//avai($conn);
function unavai($conn) {  
    $sql = "select * from  tbl_seller_package  where delete_status='0' and status='2' and availability='n'";
    $rs = mysqli_query($conn, $sql);
    $pckid = "0";
    $uid = "0";
    $pckname = "";
    $out = array();
    $j = 0;

    $imaarray = array();
    while ($row = mysqli_fetch_assoc($rs)) {
        $pckid = $row['seller_package_id'];

        $uid = $row['user_id'];
        $rus = mysqli_query($conn, "select * from tbl_user where user_id=$uid");
        while ($ru = mysqli_fetch_assoc($rus)) {
            $uname = $ru['fname']."  ".$ru['lname'];
            $uem = $ru['email_id'];
            $mno = $ru['mobile_number'];
        }

        //echo $uid;
        $pckname = $row['pck_name'];
        // echo $pckname;
        $area = $row['area_id'];
        $hid = $row['h_type_id'];
        $mid = $row['m_id'];
        $ght = $row['ground_height'];
        $ghm = $row['gh_mesurement'];
        $mna = "";
        $city = "";
        $cityname = "";
        $pin = "";
        $hname = "";
        $asq = "select * from tbl_area where area_id=$area";
        $ar = mysqli_query($conn, $asq);
        while ($ars = mysqli_fetch_assoc($ar)) {
            $areaname = $ars['area_name'];
            $city = $ars['city_id'];
            $pin = $ars['pincode'];
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

            $imaarray = $imaarray + ["image$i" => $base64];
            // echo $base64;
            //echo $pckid."\n".$imgname.$row['pck_name'];
        }
        //  $outp=array()
        ///  print_r($imaarray);
        $out[$j] = ["userid" => $row['user_id'],
            "area" => $areaname,
            "pckid" => $pckid,
            "pin" => $pin,
            "city" => $cityname,
            "ht" => $hname,
            "mt" => $mna,
            "height" => $row['height'],
            "width" => $row['width'],
            "gh1" => $ght,
            "gm1" => $ghm,
            "pckname" => $row['pck_name'],
            "tid" => $row['time_duration'],
            "pr" => $row['price'],
            "des" => $row['Description'],
            "cdate" => date("d-m-y", strtotime($row['created_on'])),
            "uname" => $uname,
            "mno" => $mno,
            "em" => $uem,
            "img" => $imaarray
        ];
        // echo $j;

        $j++;
        // print_r($imaarray['image1']);
        $imaarray = array();
    }

    // print_r($out);

    echo json_encode($out);
    // echo '<img src="'.$out[0]['img']['image2'].'">';
}



//unavai($conn);
function avaistate($conn) {
    $uids = 4; //$_POST['uid'];
    $sql = "select * from tbl_seller_package where  status='2' and availability='y' and delete_status=0 ";
    $rs = mysqli_query($conn, $sql);
    $pckid = "0";
    $uid = "0";
    $pckname = "";
    $out = array();
    $j = 0;

    $imaarray = array();
    while ($row = mysqli_fetch_assoc($rs)) {
        $pckid = $row['seller_package_id'];
        //echo $pckid;
 $result = mysqli_query($conn, "SELECT count(*) as total from tbl_request_package where  seller_package_id=$pckid");
        $total = mysqli_fetch_assoc($result);
        $nr = $total['total'];

        $result1 = mysqli_query($conn, "SELECT count(*) as total from tbl_request_package where status='y' and seller_package_id=$pckid");
        $totaly = mysqli_fetch_assoc($result1);
        $nry = $totaly['total'];

        $result2 = mysqli_query($conn, "SELECT count(*) as total from tbl_request_package where status='n' and seller_package_id=$pckid");
        $totaln = mysqli_fetch_assoc($result2);
        $nrn = $totaln['total'];

        $uid = $row['user_id'];
        //echo $uid;
        $pckname = $row['pck_name'];
        // echo $pckname;
        $area = $row['area_id'];
        $hid = $row['h_type_id'];
        $mid = $row['m_id'];
        $ght = $row['ground_height'];
        $ghm = $row['gh_mesurement'];
        $mna = "";
        $city = "";
        $cityname = "";
        $pin = "";
        $hname = "";
        $asq = "select * from tbl_area where area_id=$area";
        $ar = mysqli_query($conn, $asq);
        while ($ars = mysqli_fetch_assoc($ar)) {
            $areaname = $ars['area_name'];
            $city = $ars['city_id'];
            $pin = $ars['pincode'];
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

            $imaarray = $imaarray + ["image$i" => $base64];
            // echo $base64;
            //echo $pckid."\n".$imgname.$row['pck_name'];
        }
        //  $outp=array()
        ///  print_r($imaarray);
        $out[$j] = ["userid" => $row['user_id'],
            "area" => $areaname,
            "pckname" => $row['pck_name'],
            "pckid" => $pckid,
            "pin" => $pin,
            "city" => $cityname,
            "ht" => $hname,
            "mt" => $mna,
            "height" => $row['height'],
            "width" => $row['width'],
            "gh1" => $ght,
            "gm1" => $ghm,
            "tid" => $row['time_duration'],
            "pr" => $row['price'],
            "des" => $row['Description'],
            "cdate" => date("d-m-y", strtotime($row['created_on'])),
            "nr" => $nr,
            "nry" => $nry,
            "nrn" => $nrn,
            "img" => $imaarray
        ];
        // echo $j;

        $j++;
        // print_r($imaarray['image1']);
        $imaarray = array();
    }

    // print_r($out);

    echo json_encode($out);
    // echo '<img src="'.$out[0]['img']['image2'].'">';
}

//avaistate($conn);
function unavaistate($conn) {
    $uids = 4; //$_POST['uid'];
    $sql = "select * from tbl_seller_package where  status='2' and availability='n' and delete_status=0 and user_id=$uids";
    $rs = mysqli_query($conn, $sql);
    $pckid = "0";
    $uid = "0";
    $pckname = "";
    $out = array();
    $j = 0;

    $imaarray = array();
    while ($row = mysqli_fetch_assoc($rs)) {
        $pckid = $row['seller_package_id'];
        $result = mysqli_query($conn, "SELECT count(*) as total from tbl_request_package where  seller_package_id=$pckid");
        $total = mysqli_fetch_assoc($result);
        $nr = $total['total'];

        $result1 = mysqli_query($conn, "SELECT count(*) as total from tbl_request_package where status='y' and seller_package_id=$pckid");
        $totaly = mysqli_fetch_assoc($result1);
        $nry = $totaly['total'];

        $result2 = mysqli_query($conn, "SELECT count(*) as total from tbl_request_package where status='n' and seller_package_id=$pckid");
        $totaln = mysqli_fetch_assoc($result2);
        $nrn = $totaln['total'];

        $uid = $row['user_id'];
        //echo $uid;
        $pckname = $row['pck_name'];
        // echo $pckname;
        $area = $row['area_id'];
        $hid = $row['h_type_id'];
        $mid = $row['m_id'];
        $ght = $row['ground_height'];
        $ghm = $row['gh_mesurement'];
        $mna = "";
        $city = "";
        $cityname = "";
        $pin = "";
        $hname = "";
        $asq = "select * from tbl_area where area_id=$area";
        $ar = mysqli_query($conn, $asq);
        while ($ars = mysqli_fetch_assoc($ar)) {
            $areaname = $ars['area_name'];
            $city = $ars['city_id'];
            $pin = $ars['pincode'];
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

            $imaarray = $imaarray + ["image$i" => $base64];
            // echo $base64;
            //echo $pckid."\n".$imgname.$row['pck_name'];
        }
        //  $outp=array()
        ///  print_r($imaarray);
        $out[$j] = ["userid" => $row['user_id'],
            "area" => $areaname,
            "pckid" => $pckid,
            "pin" => $pin,
            "city" => $cityname,
            "ht" => $hname,
            "mt" => $mna,
            "height" => $row['height'],
            "width" => $row['width'],
            "gh1" => $ght,
            "gm1" => $ghm,
            "pckname" => $row['pck_name'],
            "tid" => $row['time_duration'],
            "pr" => $row['price'],
            "des" => $row['Description'],
            "nr" => $nr,
            "nry" => $nry,
            "nrn" => $nrn,
            "cdate" => date("d-m-y", strtotime($row['created_on'])),
            "img" => $imaarray
        ];
        // echo $j;

        $j++;
        // print_r($imaarray['image1']);
        $imaarray = array();
    }

    // print_r($out);

    echo json_encode($out);
    // echo '<img src="'.$out[0]['img']['image2'].'">';
}

//unavaistate($conn);
function proapprovepck($conn) {
    $uids = $_POST['uid'];
    $sql = "select * from tbl_seller_package where  status='2'  and delete_status=0 and user_id=$uids ";
    $rs = mysqli_query($conn, $sql);
    $pckid = "0";
    $uid = "0";
    $pckname = "";
    $out = array();
    $j = 0;

    $imaarray = array();
    while ($row = mysqli_fetch_assoc($rs)) {
        $pckid = $row['seller_package_id'];
        //echo $pckid;

        $uid = $row['user_id'];
        //echo $uid;
        $pckname = $row['pck_name'];
        // echo $pckname;
        $area = $row['area_id'];
        $hid = $row['h_type_id'];
        $mid = $row['m_id'];
        $ght = $row['ground_height'];
        $ghm = $row['gh_mesurement'];
        $mna = "";
        $city = "";
        $cityname = "";
        $pin = "";
        $hname = "";
        $asq = "select * from tbl_area where area_id=$area";
        $ar = mysqli_query($conn, $asq);
        while ($ars = mysqli_fetch_assoc($ar)) {
            $areaname = $ars['area_name'];
            $city = $ars['city_id'];
            $pin = $ars['pincode'];
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

            $imaarray = $imaarray + ["image$i" => $base64];
            // echo $base64;
            //echo $pckid."\n".$imgname.$row['pck_name'];
        }
        //  $outp=array()
        ///  print_r($imaarray);
        $out[$j] = ["userid" => $row['user_id'],
            "area" => $areaname,
            "pckname" => $row['pck_name'],
            "pckid" => $pckid,
            "pin" => $pin,
            "city" => $cityname,
            "ht" => $hname,
            "mt" => $mna,
            "height" => $row['height'],
            "width" => $row['width'],
            "gh1" => $ght,
            "gm1" => $ghm,
            "tid" => $row['time_duration'],
            "pr" => $row['price'],
            "des" => $row['Description'],
            "cdate" => date("d-m-y", strtotime($row['created_on'])),
             "img" => $imaarray
        ];
        // echo $j;

        $j++;
        // print_r($imaarray['image1']);
        $imaarray = array();
    }

    // print_r($out);

    echo json_encode($out);
    // echo '<img src="'.$out[0]['img']['image2'].'">';
}

//proapprovepck($conn);


function prorejpck($conn) {
    $uids = $_POST['uid'];
    $sql = "select * from tbl_seller_package where  status='1'  and delete_status=0 and user_id=$uids ";
    $rs = mysqli_query($conn, $sql);
    $pckid = "0";
    $uid = "0";
    $pckname = "";
    $out = array();
    $j = 0;

    $imaarray = array();
    while ($row = mysqli_fetch_assoc($rs)) {
        $pckid = $row['seller_package_id'];
        //echo $pckid;

        $uid = $row['user_id'];
        //echo $uid;
        $pckname = $row['pck_name'];
        // echo $pckname;
        $area = $row['area_id'];
        $hid = $row['h_type_id'];
        $mid = $row['m_id'];
        $ght = $row['ground_height'];
        $ghm = $row['gh_mesurement'];
        $mna = "";
        $city = "";
        $cityname = "";
        $pin = "";
        $hname = "";
        $asq = "select * from tbl_area where area_id=$area";
        $ar = mysqli_query($conn, $asq);
        while ($ars = mysqli_fetch_assoc($ar)) {
            $areaname = $ars['area_name'];
            $city = $ars['city_id'];
            $pin = $ars['pincode'];
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

            $imaarray = $imaarray + ["image$i" => $base64];
            // echo $base64;
            //echo $pckid."\n".$imgname.$row['pck_name'];
        }
        //  $outp=array()
        ///  print_r($imaarray);
        $out[$j] = ["userid" => $row['user_id'],
            "area" => $areaname,
            "pckname" => $row['pck_name'],
            "pckid" => $pckid,
            "pin" => $pin,
            "city" => $cityname,
            "ht" => $hname,
            "mt" => $mna,
            "height" => $row['height'],
            "width" => $row['width'],
            "gh1" => $ght,
            "gm1" => $ghm,
            "tid" => $row['time_duration'],
            "pr" => $row['price'],
            "des" => $row['Description'],
            "cdate" => date("d-m-y", strtotime($row['created_on'])),
             "img" => $imaarray
        ];
        // echo $j;
        
        $j++;
        // print_r($imaarray['image1']);
        $imaarray = array();
    }

    // print_r($out);

    echo json_encode($out);
    // echo '<img src="'.$out[0]['img']['image2'].'">';
}
function clpro($conn){
   $uid=$_POST['uid'];
   $sql="select * from tbl_user where user_id=$uid";
   $rs= mysqli_query($conn, $sql);
   $arr= $rs->fetch_all(MYSQLI_ASSOC);
   echo json_encode($arr);
}
function clientlist($conn){
    $uif=3;//$_POST['uid'];
    $seql="select * from tbl_list where user_id=$uif";
    $li= mysqli_query($conn,$seql);
    while ($lr= mysqli_fetch_assoc($li)){
        $uids=$lr['seller_package_id'];
         $sql = "select * from tbl_seller_package where  delete_status=0 and seller_package_id=$uids ";
    $rs = mysqli_query($conn, $sql);
    $pckid = "0";
    $uid = "0";
    $pckname = "";
    $out = array();
    $j = 0;

    $imaarray = array();
    while ($row = mysqli_fetch_assoc($rs)) {
        $pckid = $row['seller_package_id'];
        //echo $pckid;

        $uid = $row['user_id'];
        //echo $uid;
        $pckname = $row['pck_name'];
        // echo $pckname;
        $area = $row['area_id'];
        $hid = $row['h_type_id'];
        $mid = $row['m_id'];
        $ght = $row['ground_height'];
        $ghm = $row['gh_mesurement'];
        $mna = "";
        $city = "";
        $cityname = "";
        $pin = "";
        $hname = "";
        $asq = "select * from tbl_area where area_id=$area";
        $ar = mysqli_query($conn, $asq);
        while ($ars = mysqli_fetch_assoc($ar)) {
            $areaname = $ars['area_name'];
            $city = $ars['city_id'];
            $pin = $ars['pincode'];
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

            $imaarray = $imaarray + ["image$i" => $base64];
            // echo $base64;
            //echo $pckid."\n".$imgname.$row['pck_name'];
        }
        //  $outp=array()
        ///  print_r($imaarray);
        $out[$j] = ["userid" => $row['user_id'],
            "area" => $areaname,
            "pckname" => $row['pck_name'],
            "pckid" => $pckid,
            "pin" => $pin,
            "city" => $cityname,
            "ht" => $hname,
            "mt" => $mna,
            "height" => $row['height'],
            "width" => $row['width'],
            "gh1" => $ght,
            "gm1" => $ghm,
            "tid" => $row['time_duration'],
            "pr" => $row['price'],
            "lid"=>$lr['list_id'],
            "des" => $row['Description'],
            "img" => $imaarray
        ];
        // echo $j;

        $j++;
        // print_r($imaarray['image1']);
        $imaarray = array();
    }

    // print_r($out);
    }
    echo json_encode($out);
    
    
}
//clientlist($conn);
//clpro($conn);
function  rlist($conn){
    $li=$_POST['li'];
    mysqli_query($conn,"update tbl_list set delete_status='1' where list_id=$li");
    echo json_encode('s');
}
function allpl($conn){
    $ut=$_POST['ut'];
    $rs= mysqli_query($conn,"select * from  tbl_plans where user_type=$ut");
   $arr=$rs->fetch_all(MYSQLI_ASSOC);
    echo json_encode($arr);

    
}
//allpl($conn);
?>
