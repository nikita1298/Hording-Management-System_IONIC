import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProvidernewreqPage } from '../providernewreq/providernewreq';
import { ProvidereqimgonlyPage } from '../providereqimgonly/providereqimgonly';

/**
 * Generated class for the ProvidereqdataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-providereqdata',
  templateUrl: 'providereqdata.html',
})

export class ProvidereqdataPage {
  sh=false;
  area:any;
  city:any;
  pr:any;
  h:any;
  w:any;
  m:any;
  ht:any;
  pin:any;
  td:any;
  gh:any;
  gm:any;
  im:any;
  reqdate:any;
  pckname:any;
  des:any;
  ia:any=[];
  ima:any;
  o2:any;
  im1:any;
  rf:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.o2=navParams.get('data');
this.area=this.o2.area;
this.city=this.o2.city;
this.pr=this.o2.pr;
this.h=this.o2.height;
this.w=this.o2.width;
this.ht=this.o2.ht;
this.m=this.o2.mt;
this.pin=this.o2.pin;
this.td=this.o2.tid;
this.gh=this.o2.gh1;
this.gm=this.o2.gm1;
this.pckname=this.o2.pckname;
this.des=this.o2.des;
this.reqdate=this.o2.reqdate;
this.ima=this.o2.img;
this.rf=this.o2.rfor;
console.log(this.rf);
for(let i=1;i<=Object.keys(this.o2.img).length;i++){
this.ia.push(this.ima['image'+i]);
}
this.im1=this.ima['image1'];
console.log(this.im1)

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProvidereqdataPage');
  }
  close(){
    this.navCtrl.push(ProvidernewreqPage);
  }
  showimg(){
   this.sh=true;
//this.navCtrl.push(ProvidereqimgonlyPage,{'image':this.o2.img});
  }

  bt(){
    this.sh=false;
  }
}
