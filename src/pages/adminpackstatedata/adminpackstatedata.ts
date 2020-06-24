import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ActivePage } from '../active/active';

/**
 * Generated class for the AdminpackstatedataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-adminpackstatedata',
  templateUrl: 'adminpackstatedata.html',
})
export class AdminpackstatedataPage {

  ar: any;
  m: any;
  da:any;
s:any;
  width: any;
  height: any;
  area: any;
  city: any;
  price: any;
  duration: any;
  availability: any;
  status: any;
  arp: any;
  vdetail: any;
  citys:any;
  areas:any;
vim:boolean;
   pin:any;
   ht:any;
   mt:any;
   gh1:any;
   gm1:any;
   des:any;
   uname:any;
   email:any;
   mbno:any;
   img1:any;
   pckname:any;
   img:any=[];
   cdate:any;
   fmid:any;
  count: number;
  ia: any=[];
  nr:any;
  nry:any;
  nrn:any;
  sh:boolean;
    



  constructor(public navCtrl: NavController,public nv:NavParams,public tos:ToastController, public navParams: NavParams) {
  
  var i=nv.get('id');
this.da=nv.get('data');
this.view(i);
console.log(this.gh1+this.gm1+this.ht+this.mt);
this.sh=false;
  }

  bt(){
    this.sh=false;
  }
  close(){
    this.navCtrl.setRoot(ActivePage);
  }
  
  view(vent) {
    this.vdetail = true;
  //  console.log("VIEW");
  //this.s = vent.srcElement.id;
  //this.fmid=this.s;
    //var id,c,ars;
  this.s=vent;  
    let ti=this.tos.create({
      message:'Tap on Image to view All image',
      position:'top',
      duration:3000,
      
    });ti.present();
    this.width=this.da[this.s].width;
    this.height=this.da[this.s].height;
    this.area=this.da[this.s].area;
   this.city=this.da[this.s].city;
    this.price=this.da[this.s].pr;
    this.duration=this.da[this.s].tid;
    this.availability=this.da[this.s].av;
  this.cdate=this.da[this.s].cdate;
    this.pin=this.da[this.s].pin;               
    this.ht=this.da[this.s].ht;
    this.mt=this.da[this.s].mt;
    this.gh1=this.da[this.s].gh1;
    this.gm1=this.da[this.s].gm1;
    this.des=this.da[this.s].des;
    this.uname=this.da[this.s].uname;
    this.email=this.da[this.s].email;
    this.mbno=this.da[this.s].mbno;
    this.img=this.da[this.s].img;
this.pckname=this.da[this.s].pckname;
this.nr=this.da[this.s].uname;
this.nry=this.da[this.s].em;
this.nrn=this.da[this.s].mno;
this.img1=this.img['image1'];
for(let  i=1;i<=(Object.keys(this.img).length);i++){
  this.ia.push(this.img['image'+i]);
}
  
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad PackstatedataPage');
  }


  showimg(){
this.sh=true;
  }

}
