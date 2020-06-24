import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShareserviceProvider } from '../../providers/shareservice/shareservice';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
uid:any;
obj:any;
o2:any;
fnma:any;
lname:any;
mno:any;
email:any;
addres:any;

  constructor(public navCtrl: NavController,public httc:HttpClient,public sh:ShareserviceProvider, public navParams: NavParams) {
  this.uid=sh.getuserid();
this.getdata();
  }
getdata(){
let prm={'fn':'clpro',uid:this.uid};
this.httc.post('http://192.168.43.96/hmsproj/index.php',prm).subscribe(data=>{
console.log(data);
this.obj=JSON.stringify(data);
this.o2=JSON.parse(this.obj);
this.fnma=this.o2[0].fname;
this.lname=this.o2[0].lname;
this.mno=this.o2[0].mobile_number;
this.email=this.o2[0].email_id;
this.addres=this.o2[0].address;


});
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
