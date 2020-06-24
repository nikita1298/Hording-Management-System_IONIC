import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { UserhomepagePage } from '../userhomepage/userhomepage';

import {Events } from 'ionic-angular'

import { AdmindashboardPage } from '../admindashboard/admindashboard';
import { BuyersPage } from '../buyers/buyers';
import {ShareserviceProvider} from '../../providers/shareservice/shareservice'
import { ForgetpassPage } from '../forgetpass/forgetpass';
import { AdminprovidePage } from '../adminprovide/adminprovide';




/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  formgroup: FormGroup;
  email: AbstractControl;
  passwor: AbstractControl;
  obj: any;
  o2: any;
  logemail: any;
  logpassword: any;


  constructor(public navCtrl: NavController,public sha:ShareserviceProvider, public event:Events,public alert: AlertController, public httc: HttpClient, public http: Http, public navParams: NavParams, public formbuilder: FormBuilder) {
    this.formgroup = formbuilder.group({
      email: ['', Validators.compose(
        [Validators.required,
          Validators.pattern('^[A-Z0-9a-z\\._%+-]+@([A-Za-z0-9-]+\\.)+[A-Za-z]{2,4}$')  ])],
       
      passwor: ['', Validators.compose([
        Validators.required,
       // Validators.pattern('(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')
      ])],

    });
    this.email = this.formgroup.controls['email'];
    this.passwor = this.formgroup.controls['passwor'];
    this.formgroup.controls['passwor'].setValue(null);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  rethome() {
    this.navCtrl.push(HomePage);
  }
  loginuser() {
    //this.logemail=this.formgroup.controls['email'].value;
    console.log(this.formgroup.controls['email'].value);
    let e = { fn: 'login', ema: this.email.value, pas: this.passwor.value };
    this.httc.post("http://192.168.43.96/hmsproj/index.php", e).subscribe(data => {
      console.log(JSON.stringify(data));
      this.o2 = JSON.stringify(data);
      this.obj = JSON.parse(this.o2);
      //console.log(this.obj._body);

      console.log(this.obj);
     // console.log(this.obj._body[25]);
this.logemail=this.obj[0].user_type;
this.logpassword=this.obj[0].user_id;
     if (this.obj == "N") {
        let a = this.alert.create({
        
          title: "Invalid username or password",
          buttons: ['Ok']

        }); a.present();
        this.email.setValue("");
        this.passwor.setValue("");
      }
     // else if(this.obj._body[1]==1 || this.obj._body[1]==0){
      else if(this.logemail=="1" ){

     
       //this.email.setValue("VALID");
        //this.event.publish('user:provi');
        this.email.setValue("VALID");
        this.sha.setuserid(this.obj[0].user_id);
        this.sha.setutu(this.logemail);
        console.log("cdjcbdcbcdj"+this.logpassword);
         this.event.publish('user:pros',this.logpassword);
      
         this.navCtrl.setRoot(AdminprovidePage,{ids:this.logpassword});
     
      }
     else if(this.logemail=="0"){
      this.event.publish('user:admins');
      this.navCtrl.setRoot(AdmindashboardPage);
  
     }
     else if(this.logemail=='2' ){
     
      this.email.setValue("VALID");
      this.sha.setuserid(this.logpassword);
      
      this.sha.setutu(this.logemail);
       this.event.publish('user:cust',this.logpassword);
    
       this.navCtrl.setRoot(UserhomepagePage,{ids:this.logpassword});
     }
      else {

      }


    },error=>{
console.log("Network Error"+error);
    }
    
  
    )

  }
  lh() {

    this.navCtrl.push(BuyersPage);
  }
  forgetpass(){
   this.navCtrl.push(ForgetpassPage);
  }

}
