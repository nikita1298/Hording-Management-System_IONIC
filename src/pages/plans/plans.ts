import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ViewController, AlertController,ToastController} from 'ionic-angular';
import { ImageViewerController } from 'ionic-img-viewer';
import {ShareserviceProvider} from '../../providers/shareservice/shareservice'
import { HttpClient } from '@angular/common/http';
/**
 * Generated class for the PlansPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-plans',
  templateUrl: 'plans.html',
})
export class PlansPage {
  _imageViewerCtrl: ImageViewerController;
  imh:any;
  id:any;
  d:any;
  pame:any;
  area:any;
  city:any;
  pr:any;
  h:any;
  w:any;
  m:any;
  ht:any;
  pin:any;
  td:any;
  des:any;
  im:any;
  gh:any;
  vals:any;
  gm:any;
  urid:any;
  t:any;
  count:any;
  sh=false;
 ia:any=[];
  constructor(public navCtrl: NavController,public to:ToastController,public httc:HttpClient,public alertctrl:AlertController,public sha:ShareserviceProvider,imageViewerCtrl: ImageViewerController, private view:ViewController,public navParams: NavParams) {
  
    this.d=navParams.get('data');
    this.id=navParams.get('od');
    this.im=navParams.get('arr');
    console.log("id"+this.d[this.id].area);
  console.log("img"+Object.keys(this.d[this.id].img).length);
  this.area=this.d[this.id].area;
  this.city=this.d[this.id].city;
this.pin=this.d[this.id].pin;
this.h=this.d[this.id].height;
this.w=this.d[this.id].width;
this.m=this.d[this.id].mt;
this.ht=this.d[this.id].ht;
this.td=this.d[this.id].tid;
this.pr=this.d[this.id].pr;
this.des=this.d[this.id].des;
this.gh=this.d[this.id].gh1;
this.gm=this.d[this.id].gm1;
this.im=this.d[this.id].img;
this.urid=this.d[this.id].userid;

  var cu=sha.getuserid();
  for(let i=1;i<=Object.keys(this.im).length;i++){
    console.log("imgss"+i+this.im['image'+i]);
    
     this.ia.push(this.im['image'+i]);
 console.log(this.ia);
  }
  this.count=Object.keys(this.im).length;
  

console.log("imgss"+Object.keys(this.im).length+this.count);

this.vals=this.sha.getuserid();
}
  
    

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlansPage');
  }
  presentImage(myImage) {
    const imageViewer = this._imageViewerCtrl.create(myImage);
    imageViewer.present();
 
    setTimeout(() => imageViewer.dismiss(), 1000);
    imageViewer.onDidDismiss(() => alert('Viewer dismissed'));
  }
bt(){
  this.sh=false;
}
  close(){
this.view.dismiss();
  }
  addl(){
let pam={'fn':'addlist',"ur":this.vals,"spi":this.d[this.id].pckid}
this.httc.post("http://192.168.43.96/hmsproj/index.php",pam).subscribe(dastas=>{
  console.log("hfjhjhsj"+dastas);
  let al=this.alertctrl.create({
    subTitle:'Request sended susscessfully',
  });al.present();
});
  }
  sendreq(){
  
console.log(this.vals);
let al=this.alertctrl.create({
 
  subTitle:'Time Duration for that you want',

  inputs: [
    {
      name: 'tids',
      placeholder: 'Months',
    }],
    enableBackdropDismiss:false,
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Send',
        handler: data => {
          var s=data.tids;
          var re = new RegExp("^(\\d+)$");
          var sd=s.charAt(0);
          let isValid=re.test(s);
if(!isValid && s!=null){
console.log('number_check');
this.t="Number Only";
let t=this.to.create({
  message:"please enter Number",
  showCloseButton:true,
  dismissOnPageChange:true
})
t.present();
return false;
} 
else{


          if(data.tids<19){
            // logged in!
          
          console.log("tisa"+data.tids);
          let param={'fn':"sendreq","spid":this.d[this.id].pckid,"lurid":this.vals,"urtd":data.tids};
          this.httc.post("http://192.168.43.96/hmsproj/index.php",param).subscribe(datas=>{
            console.log("hfjhjhsj"+datas);
          })
        
          console.log("hfjhjhsj"+sd);
        }
        else{
         // this.t="Maximum 18 Months";
         let t=this.to.create({
          message:"Maximum 18 Months ",
          showCloseButton:true,
          dismissOnPageChange:true
        })
         t.present();
          return false;
        }

       
         }}
      }
    ]
     
});al.present();

  }
  
  showimg(){
this.sh=true;
  }
}
