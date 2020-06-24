import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { PlansPage } from '../plans/plans';

/**
 * Generated class for the UserhomepagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userhomepage',
  templateUrl: 'userhomepage.html',
})  
export class UserhomepagePage {
  public so=false;
  public card=false;
  ImageAraay:any=[];
  vals:any;
  obj:any;
  o2:any;
  da:any;
  constructor(public httc:HttpClient,public al:AlertController,public navCtrl: NavController, public navParams: NavParams) {
    this.vals=navParams.get('ids');
    this.getallpck();
    console.log("bdsdbsdsjhj"+this.vals);
    this.ImageAraay=[
      {'image':'../../assets/img/i2.jpg' ,'active':'true'},
      {'image':'../../assets/img/i1.jpg'},
      {'image':'../../assets/img/i3.jpg'},
    ]
  }
  onInput(event){
  console.log(event.target.value);
}
demo(){
  this.card=true;
}
fclose(){
  this.card=false;
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserhomepagePage'); 
  }
getallpck(){
  let prm={"fn":"allpck"}
this.httc.post("http://192.168.43.96/hmsproj/index.php",prm).subscribe(data=>{
  console.log(JSON.stringify(data));
  this.obj = JSON.stringify(data);
  this.o2 = JSON.parse(this.obj);
//console.log("IMAGES"+this.o2[0]);
  this.da=this.o2;
})
}

showpck(ii){
  var s = ii.srcElement.id;
  console.log("ss"+s);
  console.log("IMAGES"+this.o2[s].area);
 let arr=this.o2[s].img;
 console.log(arr['image1']);
  this.navCtrl.push(PlansPage,{
    'data':this.da,'od':s,'arr':arr
  });
}
}
