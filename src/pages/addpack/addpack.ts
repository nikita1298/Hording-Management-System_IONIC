import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, normalizeURL } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Http } from '@angular/http';
import {Camera,CameraOptions} from  '@ionic-native/camera';
import { HttpClient } from '@angular/common/http';
import {Events} from 'ionic-angular'
import 'rxjs/add/operator/map';
import {ImagePicker,ImagePickerOptions} from '@ionic-native/image-picker'
import {ShareserviceProvider} from '../../providers/shareservice/shareservice'

import {File}from '@ionic-native/file';

import { FileTransfer, FileUploadOptions, FileTransferObject} from '@ionic-native/file-transfer';
import { stringify } from '@angular/compiler/src/util';

@IonicPage()
@Component({
  selector: 'page-addpack',
  templateUrl: 'addpack.html',
})
export class AddpackPage {
  path:any=[];
  il:any;
  imageame:any=[];
  imagepath:any=[];
pkname :any;
obj:any;
o2:any;
area:any;
tobj:any;
to2:any;
ht:any;
htid:any;
mtid:any;
avid:any;
max:any;
da:any; 
today:any;
size:String;
s:String;
vals:any;
sna:any;
o1:any;
idd:any;
obj1:any;
gt:any;
gm:any;
  formgrouppck:FormGroup;
  pckname:AbstractControl;
  pckarea:AbstractControl;
  htype:AbstractControl;
  mt:AbstractControl;
  pckh:AbstractControl
  ;pckw:AbstractControl;
  ava:AbstractControl;
  pckm:AbstractControl;
  pckdes:AbstractControl;
  pckpr:AbstractControl;
  ght:AbstractControl;
  ghm:AbstractControl;
  imgsrc:any=[];
  images:any=[];
  constructor(public fp:File,public transfer:FileTransfer,public sha:ShareserviceProvider,public imgpik:ImagePicker,public event:Events,public navCtrl: NavController,public camera:Camera ,public navParams: NavParams,public http: Http, public httc: HttpClient, public alertctrl: AlertController, public formbuilder: FormBuilder) {
    this.vals=navParams.get('PARAMETERS');
   this.vals=sha.getuserid()
   //this.getimss();
    console.log("1212d1s2"+this.vals);
   //this.path="../../assets/img/1.png";
 
    this.formgrouppck=formbuilder.group({
    pckname:['',Validators.required],
    pckarea:['',Validators.required],
    htype:['',Validators.required],
    mt:['',Validators.required],
    pckh:['',Validators.required],
   pckw:['',Validators.required],
   ava:['',Validators.required],
   ght:['',Validators.required],
   ghm:['',Validators.required],
   
   pckm:['',],
  pckdes:['',Validators.required],
  pckpr:['',Validators.required],

  });

  //this.max=moment().add(2,'months').formate();

   
  this.areas()
   this.pckname=this.formgrouppck.controls['pckname'];
   this.pckarea=this.formgrouppck.controls['pckarea'];
  this.htype=this.formgrouppck.controls['htype'];
   this.mt=this.formgrouppck.controls['mt'];
   this.pckh=this.formgrouppck.controls['pckh'];
   this.pckw=this.formgrouppck.controls['pckw'];
   this.ava=this.formgrouppck.controls['ava'];
   this.pckm=this.formgrouppck.controls['pckm'];
   this.pckdes=this.formgrouppck.controls['pckdes'];
   this.pckpr=this.formgrouppck.controls['pckpr'];
   this.ght=this.formgrouppck.controls['ght'];
   this.ghm=this.formgrouppck.controls['ghm'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddpackPage');
  }
areas(){
  this.httc.get("http://192.168.43.96/hmsproj/area.php").subscribe(data => {
      console.log(data);
      this.obj = JSON.stringify(data);
      this.o2 = JSON.parse(this.obj);
      
      this.pkname = this.o2;
});
this.httc.get("http://192.168.43.96/hmsproj/htype.php").subscribe(datas => {
  console.log(datas);
  this.tobj = JSON.stringify(datas);
  this.to2 = JSON.parse(this.tobj);
  
  this.ht = this.to2;
});
}
onChange($event){
console.log($event);
this.area=$event;
}

onChang($event){
  console.log($event);
  this.htid=$event;
  }
  
onChan($event){
  console.log($event);
  this.mtid=$event;
  }
  onava($event){
    console.log($event);
    this.avid=$event;
   
  }
  inpck(){
    console.log("clicked"+this.vals.value);
 //var idd;
    if(this.path.length>=0){
  console.log("clicked"+this.vals.value);
  let prm={fn:'addpck',use_id:this.vals,ar_id:this.area,h_id:this.htid,m_id:this.mtid,pckname:this.pckname.value,ght:this.ght.value,ghm:this.ghm.value,width:this.pckw.value,height:this.pckh.value,ava:this.avid,td:this.pckm.value,price:this.pckpr.value,des:this.pckdes.value};
  console.log(prm); 
   this.httc.post('http://192.168.43.96/hmsproj/index.php',prm).subscribe(data=>{
      alert(JSON.stringify(data));
      this.obj1=JSON.stringify(data);
      this.o1=JSON.parse(this.obj1);
      this.idd=this.o1.lid;
      console.log(this.o1.lid);
     this.save(this.idd);
      /*console.log(JSON.stringify(data)+""+this.o1.lid);
      alert("id"+this.o1.lid);
      alert("id"+this.o1[0].lid);*/
    
      if(JSON.stringify(data)=='s')
      {
        console.log('SUCESSS');
      }
    });
  // this.save(this.idd);
/*
    let pra={fn:'addpckimg',apimg:this.images};
    this.httc.post('http://localhost/hmsproj/index.php',pra).subscribe(dats=>{
      console.log(dats);
    })*/
  }
  else{
    alert("Add  atlest 3 images"+this.images.length);
  }
  
  }
  addpck(){
  
  

    //this.sna='n';
    const optionss = {
      maximumImagesCount: 5,
      quality: 50,
      width: 512,
      height: 512,
      //outputType:1

    }
    let options = {

      quality: 100
    };


    this.imgpik.getPictures(optionss).then((results) => {
      for (let i = 0; i < results.length; i++) {
        var sna = "n";
        var ch = "n";

        results[i] = results[i].toString();
        this.il = results[i].length;


        this.imagepath[i] = results[i].substr(0, results[i].lastIndexOf('/') + 1);
        this.imageame[i] = results[i].substr(results[i].lastIndexOf('/') + 1);

        this.fp.readAsDataURL(this.imagepath[i], this.imageame[i]).then((b64str) => {
          console.log('Image B64 URL: ' + b64str);
          // this.path.push(b64str);

          for (var j = 0; j < this.path.length; j++) {

            // this.images.push(results[i].substring(8, this.il));
            if (this.path[j] == b64str) {
              sna = "y";
              // this.path.push(b64str);

            }
          }
          if (sna == "n") {
            this.path.push(b64str);

            console.log("imgggggs" + results[i].substring(8, 100));
            this.images.push(results[i].substring(8, 100));

          }

        }).catch(err => {
          console.log('readAsDataURL failed: (' + err.code + ")" + err.message);
        })
        alert("fjhjhfjghfjf" + this.images[i] + this.il);
        //this.images=results;
        // alert(this.images[i]);


        // }
      }

    }, (err) => {
      console.log('error' + err);
    }

    );

  
  }
  getimss(){
  this.httc.get("http://192.168.43.96/hmsproj/getimg.php").subscribe(res=>{
    console.log("data");
    console.log(JSON.stringify(res));
    
  })
    }
    rmimg(ii){
      var s = ii.srcElement.id;
      alert("Image id" + s);
      console.log(s);
      this.path[s] = "";
      //z this.images[s]=null;
      alert(this.path[s]);
      this.images[s] = "";
     
    }

    save(idd) {
    
      for (let i = 0; i < this.images.length; i++) {
        if (this.images[i] != "") {
          const fileTransfer: FileTransferObject = this.transfer.create();
  
          let options1: FileUploadOptions = {
            fileKey: 'file',
            fileName: this.pckname.value +''+i+ '.jpg',
            httpMethod:'POST',
            chunkedMode:true,
            params:{urid:this.vals,pn:this.pckname.value,pid:this.idd,in:this.pckname.value+''+i+'.jpg'},
            headers: {}
  
          }
          // if (this.il > 0) {
          fileTransfer.upload(this.images[i], 'http://192.168.43.96/hmsproj/getimg.php', options1)
            .then((data) => {
              // success
              alert("success");
              console.log("im"+JSON.stringify(data));
              //  alert(resizeTo);
            }, (err) => {
              // error
              alert("error" + JSON.stringify(err));
              console.log("error" + JSON.stringify(err));
            });
  
  
        }
  
      }
  
  
    }
    
  


}
