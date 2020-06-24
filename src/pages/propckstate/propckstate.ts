import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ShareserviceProvider } from '../../providers/shareservice/shareservice';
import { PackstatedataPage } from '../packstatedata/packstatedata';

/**
 * Generated class for the PropckstatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-propckstate',
  templateUrl: 'propckstate.html',
})
export class PropckstatePage {
  obj:any;
  o2:any;
  da:any;

  obj1:any;
  o21:any;
  da1:any;
  constructor(public navCtrl: NavController,public ale:AlertController,public sha:ShareserviceProvider,public httc:HttpClient, public navParams: NavParams) {
  this.active();
  this.deactive();
  }

  active(){
    let prm={'fn':'avaistate',uid:this.sha.getuserid()};
this.httc.post("http://192.168.43.96/hmsproj/index.php",prm).subscribe(data=>{
console.log(data);
this.obj=JSON.stringify(data);
this.o2=JSON.parse(this.obj);
this.da=this.o2;
//console.log(this.o2[0].area);
console.log(this.da)


})
  }
  deactive(){

    let prm={'fn':'unavaistate',uid:this.sha.getuserid()};
    this.httc.post("http://192.168.43.96/hmsproj/index.php",prm).subscribe(data=>{
    console.log(data);
    this.obj1=JSON.stringify(data);
    this.o21=JSON.parse(this.obj1);
    this.da1=this.o21;
    //console.log(this.o2[0].area);
    console.log(this.da)
    });    

  }
  clicl($event){
   let al=this.ale.create({
     title:"Deactivation",
     subTitle:"Packege Deactivate"
   });al.present()
  }

  clicls($event){
    let al=this.ale.create({
      title:"Deactivation",
      subTitle:"Packege Deactivate"
    });al.present();
  }
  view(i){
    console.log(i+"navav");
    this.navCtrl.push(PackstatedataPage,{'data':this.o2,'id':i});
  }
  views(i){
    console.log(i+"navav111");
    this.navCtrl.push(PackstatedataPage,{'data':this.o21,'id':i});
  
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PropckstatePage');
  }

}
