import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { HttpClient } from '@angular/common/http'
import {Http} from '@angular/http'
/**
/**
 * Generated class for the NewpckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newpck',
  templateUrl: 'newpck.html',
})
export class NewpckPage {
  obj: any;
  o2: any;
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
    


  constructor(public navCtrl: NavController,public tos:ToastController ,public http:Http,public httc: HttpClient, public navParams: NavParams) {
    this.vdetail = false;
    this.getdata();
    this.getarea();
    this.vim=false;
    this.getcity();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewpckPage');
  }
  getdata() {
    this.httc.get("http://localhost/hmsproj/allpck.php").subscribe(data => {
      console.log("datatata"+data);

     this.obj = JSON.stringify(data);
     // console.log(data);
      this.o2 = JSON.parse(this.obj);
     // console.log("datatata"+Object.keys(this.o2).length);
     //console.log(this.o2[0].area);
   
     this.da=this.o2;
    //  this.ar = data;
     
    });

  }
  bt(){
    this.vdetail=false;
  }
bt1(){
  this.vim=false;
  this.vdetail=true;
}
  view(vent) {
    this.vdetail = true;
    console.log("VIEW");
  this.s = vent.srcElement.id;
  this.fmid=this.s;
    //var id,c,ars;
  
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
    if(this.availability=='y')
    {
        this.status="Available"
    }
    else{
    this.status="Not Available"
    }
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
this.img1=this.img['image1'];
    //this.arp=this.ar;
    /*console.log(this.s);
    for (let i = 0; i < this.da.length; i++) {
      console.log(this.da[i].pckid);
      if (this.da[i].pckid == this.s) {
        // this.ars[i]=this.ar[i];
        // this.arp[i]=this.ar[i];
        id = this.da[i].pck_name
        console.log("sbdsbsn");
        console.log(id);
        this.width = this.da[i].width;
        this.height = this.da[i].height;
        ars = this.da[i].area_id;
        this.prize = this.da[i].price;
        this.duration = this.da[i].time_duration;
        this.availability = this.da[i].availability;
        if(this.availability=='y')
        {
            this.status="Available"
        }
        else{
        this.status="Not Available"
        }
        this.status = this.ar[i].status;
        if (this.status == 0) {
          this.status = "pending";
        }
        else if (this.status == 1) {
          this.status = "rejected";
        }

      }
    }
    this.m = id;
    for(let ii=0;ii<this.areas.length;ii++){
      if(this.areas[ii].area_id==ars)
      {
        this.area=this.areas[ii].area_name;
        c=this.areas[ii].city_id;
      }
    }
    for(let iii=0;iii<this.citys.length;iii++){
      if(this.citys[iii].city_id==c)
      {
        this.city=this.citys[iii].city_name;
//ars=this.areas[iii].city_id;
      }
    }
console.log("area"+this.area);
console.log("city"+this.city);*/
  }
  getarea(){
    this.httc.get("http://localhost/hmsproj/getarea.php").subscribe(data => {

      this.obj = JSON.stringify(data);
      console.log(data);
      this.o2 = JSON.parse(this.obj);
      this.areas = data;

    });
  }
  getcity(){
    this.httc.get("http://localhost/hmsproj/getcity.php").subscribe(data => {

      this.obj = JSON.stringify(data);
      console.log(data);
      this.o2 = JSON.parse(this.obj);
      this.citys = data;

    });
  }
  showimg(){
    //this.navCtrl.push(AdminreqimgPage,{'image':this.img});
     this.vim=true;
     this.vdetail=false;

     for(let i=1;i<=Object.keys(this.img).length;i++){
      this.ia.push(this.img['image'+i]);
    }
    this.count=Object.keys(this.img).length;
  
  }

  back() {
    this.vdetail = false;
    this.m = null;
    this.getdata();

  }
  approve() {
    console.log(this.s);
    let prm={fn:'approvepack',id:this.s};
    this.httc.post("http://localhost/hmsproj/index.php",prm).subscribe(data => {
      console.log(data);
    });


  }
  reject() {
console.log(this.s);
let prm={fn:'rejectpack',id:this.s};
this.httc.post("http://localhost/hmsproj/index.php",prm).subscribe(data => {
  console.log(data);
});


  }

}
