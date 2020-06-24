import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { ShareserviceProvider } from '../../providers/shareservice/shareservice';
import { AdminpackstatedataPage } from '../adminpackstatedata/adminpackstatedata';

/**
 * Generated class for the ActivePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-active',
  templateUrl: 'active.html',
})
export class ActivePage {

  obj: any;
  o2: any;

  obj1: any;
  o21: any;
  da1:any
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

    



  constructor(public navCtrl: NavController,public sha:ShareserviceProvider,public alert:AlertController,public tos:ToastController ,public http:Http,public httc: HttpClient, public navParams: NavParams) {
    this.vdetail = false;
   this.avai();
   this.unavai();
  }

  avai(){
    let prm={'fn':'avai',uid:this.sha.getuserid()};
    this.httc.post("http://192.168.43.96/hmsproj/index.php",prm).subscribe(data=>{
    console.log(data);
    this.obj=JSON.stringify(data);
    this.o2=JSON.parse(this.obj);
    this.da=this.o2;
    //console.log(this.o2[0].area);
    console.log(this.da)
  });
}
  unavai(){
    let prm={'fn':'unavai',uid:this.sha.getuserid()};
    this.httc.post("http://192.168.43.96/hmsproj/index.php",prm).subscribe(data=>{
    console.log(data);
    this.obj1=JSON.stringify(data);
    this.o21=JSON.parse(this.obj1);
    this.da1=this.o21;
    //console.log(this.o2[0].area);
    console.log(this.da)
  });
  }

  view(i){
    console.log(i+"navav");
    this.navCtrl.push(AdminpackstatedataPage,{'data':this.o2,'id':i});
  }
  views(i){
    console.log(i+"navav111");
    this.navCtrl.push(AdminpackstatedataPage,{'data':this.o21,'id':i});
  
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivePage');
  }

}
