import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { ShareserviceProvider } from '../../providers/shareservice/shareservice';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the ClientlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clientlist',
  templateUrl: 'clientlist.html',
})
export class ClientlistPage {

  obj:any;
  o2:any;
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
    bl:any;
      
    constructor(public navCtrl: NavController,public tos:ToastController,public sha:ShareserviceProvider,public httc:HttpClient, public navParams: NavParams) {
       this.getappreqdata();
       this.vdetail=false;
       this.vim=false;
    }
  getappreqdata(){
    //var a=this.sha.getuserid;
    console.log("uid"+this.sha.getuserid());
    let prm={fn:'clientlist',uid:this.sha.getuserid()}
    this.httc.post("http://192.168.43.96/hmsproj/index.php",prm).subscribe(data=>{
  console.log(data)
  this.obj=JSON.stringify(data);
  this.o2=JSON.parse(this.obj);
  this.da=this.o2;
  console.log(this.o2);
})
  }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad clientlist');
    }
  
    
    bt(){
      this.vdetail=false;
    this.vim=false;
    }
  bt1(){
    this.vim=false;
    this.vdetail=true;
  }
  dele(){
    console.log(this.s);
    var lid=this.da[this.s].lid;
    console.log(lid);
    let p={'fn':'rlist','li':lid};
    this.httc.post("http://192.168.43.96/hmsproj/index.php",p).subscribe(data=>{
      console.log(data);
  });

  }
    view(i){
      var id=i;
      this.vdetail = true;
      
      console.log("VIEW");
    this.s = id;
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
      this.uname=this.da[this.s].cname;
      this.email=this.da[this.s].cemail;
      this.mbno=this.da[this.s].cmbno;
      this.img=this.da[this.s].img;
  this.pckname=this.da[this.s].pckname;
  this.img1=this.img['image1'];
  
    }
    showimg(){
      this.vim=true;
      this.vdetail=false;
  
      for(let i=1;i<=Object.keys(this.img).length;i++){
       this.ia.push(this.img['image'+i]);
     }
     this.count=Object.keys(this.img).length;
   
   
  
    }
  
  }
  