import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { HomePage } from '../home/home';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Cordova } from '@ionic-native/core';
import { Platform } from 'ionic-angular/platform/platform';




/**
 * Generated class for the BuyersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-buyers',
  templateUrl: 'buyers.html',
})
export class BuyersPage {
  
  amt1: any;
  s: any;
  obj: any;
  o2: any;
  utys: any;
  txt: any;
  plans:any;
  pay: boolean;
  spin: any;
  ut:any;
  ti:any;
  pli:any;
  public date;

  formgroup: FormGroup;
  fristname: AbstractControl;
  lastname: AbstractControl;
  Mobileno: AbstractControl;
  Email: AbstractControl;
  passwor: AbstractControl;
  Address: AbstractControl;
  Confrompass: AbstractControl;
  uty: AbstractControl;
  amut: AbstractControl;
  constructor(public navCtrl: NavController,public plt:Platform, public lc:LoadingController,public iab: InAppBrowser, public navParams: NavParams, public http: Http, public httc: HttpClient, public alertctrl: AlertController, public formbuilder: FormBuilder) {
    this.pay = false;
    this.amt1=0;
    this.formgroup = formbuilder.group({
      amut: ['',],
      fristname: ['', Validators.required],
      lastname: ['', Validators.required],
      Mobileno: ['', Validators.required],
      Email: ['', Validators.compose([
        Validators.required,
        Validators.pattern('^[A-Z0-9a-z\\._%+-]+@([A-Za-z0-9-]+\\.)+[A-Za-z]{2,4}$')  ])],
      passwor: ['', Validators.compose([
      Validators.required   ])],
      Confrompass: ['', Validators.required],
      Address: ['', Validators.required],
      uty: ['', Validators.required],
    });
    /*  this.spin=[{
        'amt':'300'
      },
     {'amt':'400'}]*/
    this.fristname = this.formgroup.controls['fristname'];
    this.lastname = this.formgroup.controls['lastname'];
    this.Mobileno = this.formgroup.controls['Mobileno'];
    this.Address = this.formgroup.controls['Address'];
    this.Email = this.formgroup.controls['Email'];
    this.passwor = this.formgroup.controls['passwor'];
    this.Confrompass = this.formgroup.controls['Confrompass'];
    this.uty = this.formgroup.controls['uty'];
    this.amut = this.formgroup.controls['amut'];


  }
  register(){
    if (this.passwor.value == this.Confrompass.value) {
  
    let r = { fn: 'reg', uty: this.uty.value, email: this.Email.value, mbo: this.Mobileno.value, fname: this.fristname.value, lname: this.lastname.value, add: this.Address.value, pass: this.passwor.value };
    this.httc.post("http://192.168.43.96/hmsproj/index.php", r).subscribe(data => {
      console.log(data);
      if(data=="i"){
        console.log("Email is ueded");
        this.txt = "This Email And mobile number is already registerd";
         
      }
      else if(data=="m"){
        this.txt = "This Mobile number is already registerd";
          
      }
      else if(data=="e"){
        this.txt = "This Email id  is already registerd";
     
      }
      else{
        this.txt = this.Email.value + " register Sucessfully!!!";
        console.log("dfndnmdmpa"+this.plans);
        let prs={'fn':'member',uid:data,ut:this.uty.value,dur:this.ti}
        this.httc.post('http://192.168.43.96/hmsproj/index.php',prs).subscribe(dataa=>{
console.log(dataa);
if(dataa!="mbs"){
  let pim={'fn':'payment',mb:dataa,plid:this.pli,amts:this.amt1}
  this.httc.post('http://192.168.43.96/hmsproj/index.php',pim).subscribe(da=>{
    console.log(da);
});

}
        });
      }
      let al = this.alertctrl.create({
        subTitle: this.txt,
        buttons: ['Ok'],
      }); al.present();
   

  });
}
else{
  let al = this.alertctrl.create({
    title: 'Password and conform password does not match',
    buttons: ['Ok'],
  }); al.present();
  this.Confrompass.setValue("");
  this.passwor.setValue("");


}
    
  }
  /*
  register() {
    console.log(this.uty.value);
    if (this.passwor.value == this.Confrompass.value) {
      let r = { fn: 'reg', uty: this.uty.value, email: this.Email.value, mbo: this.Mobileno.value, fname: this.fristname.value, lname: this.lastname.value, add: this.Address.value, pass: this.passwor.value };
      this.http.post('http://192.168.43.96/hmsproj/index.php', r).subscribe(data => {
        //console.log(JSON.stringify(data['_body']));
        this.o2 = JSON.stringify(data);
        this.obj = JSON.parse(this.o2);
        console.log(this.obj._body);
        if (this.obj._body[1] == "S") {
          this.txt = this.Email.value + " register Sucessfully!!!";
          let al = this.alertctrl.create({
            subTitle: this.txt,
            buttons: ['Ok'],
          }); //al.present();
          this.navCtrl.push(HomePage);
          //  console.log("YOU REGISTERD SUCESS FULLY");
        } else {
          if (this.obj._body[1] == "i") {
            this.txt = "This Email And mobile number is already registerd";
            //  console.log("YOU REGISTERD SUCESS FULLY");
            this.Email.setValue('');
            this.Mobileno.setValue('');
          }
          else if (this.obj._body[1] == "m") {
            this.txt = "This Mobile number is already registerd";
            this.Mobileno.setValue('');
            //  console.log("YOU REGISTERD SUCESS FULLY");
          } else if (this.obj._body[1] == "e") {
            this.txt = "This Email is alredy registerd";
            this.Email.setValue('');
            //  console.log("YOU REGISTERD SUCESS FULLY");
          }
          let al = this.alertctrl.create({
            subTitle: this.txt,
            buttons: ['Ok'],
          }); al.present();
        }
      });
    }
    else {
      let al = this.alertctrl.create({
        title: 'Password and conform password does not match',
        buttons: ['Ok'],
      }); al.present();
      this.Confrompass.setValue("");
      this.passwor.setValue("");
    }
  }*/
membership(){
  this.date=new Date().toISOString;
  let ae={fn:'member',user_type:this.uty.value,em:this.Email.value,ti:this.ti,pid:this.txt}
  this.http.post('http://localhost/hmsproj/index.php',ae).subscribe(data=>{

  });
}



  nec() {
    if (this.passwor.value == this.Confrompass.value) {
    
    this.pay = true;
   this.ut=this.uty.value;
    this.utys = this.uty.value;
    console.log(this.uty);
    //bind spinner

    this.httc.get("http://192.168.43.96/hmsproj/bindspin.php").subscribe(data => {
      console.log(data);
      this.obj = JSON.stringify(data);
      this.o2 = JSON.parse(this.obj);
      this.spin = this.o2;
      /* for(let i=0;i<this.o2.length;i++)
       {
         console.log(this.utys)
         if(this.o2[i].user_type==this.utys){
           console.log(this.o2[i].amount);
           this.spin[i]=[{
              'amount':this.o2[i].amount,
             //'time_duration':this.o2[i].time_duration,
             //'id':this.o2[i].plan_id,
            
           }];
         console.log(this.spin[i].amount);
           //this.o2[i];
  
         }
       }
       //console.log(this.o2[0].amount);*/

    });
  }
  else {
    let al = this.alertctrl.create({
      title: 'Password and conform password does not match',
      buttons: ['Ok'],
    }); al.present();
    this.Confrompass.setValue("");
    this.passwor.setValue("");
  }
  }
  reback() {
    this.pay = false;
    this.spin = [{}];
    this.ut=null;
  }
  rethome() {
    this.navCtrl.push(HomePage);
  }
  onChange($event) {
    this.txt = $event;
    // console.log("vbvxbv"+this.txt);


    this.amt1 = null;

    for (let i = 0; i < this.spin.length; i++) {

      if (this.o2[i].plan_id == this.txt) {
        this.amt1 = this.o2[i].amount;
        this.ti=this.o2[i].time_duration;
         this.pli=this.o2[i].plan_id;
      
        console.log(this.amt1);
      }
    }
    var ab = document.getElementById("amt12") as HTMLInputElement;
    ab.value = this.amt1;
    console.log(ab.value);
    this.formgroup.controls['amut'].enable();
    this.formgroup.controls['amut'].setValue(this.amt1);

    this.formgroup.controls['amut'].disable();
    console.log(this.amut.value);
  }
  regi() {
    console.log("12djkdsjkjkksdjscheck"+this.amt1);
    if(this.amt1!=0){

    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    let param = { amount: this.amt1 };
    console.log(this.amt1);
    this.http.post('http://localhost:8082/createpayment/', JSON.stringify(param), options).map(res => res.json()).subscribe(datas => {
      console.log(datas);
      console.log(datas.links[1].href + "HIi LINKS");
      var browser = this.iab.create(datas.links[1].href, '_blank');
 browser.show();
      console.log(datas);
      this.obj = JSON.stringify(datas);
      this.o2 = 0;
      this.s = "";
      for (let data1 of this.obj) {
        this.o2++;
        if (data1 != "," && data1 != '"') {
          if (this.o2 <= 36 && this.o2 >= 12 && data1 != null) {
            console.log("DONE TO GET");
            this.s = this.s + data1;
            //console.log(this.s);
          }
        }
      }
      
      console.log(this.s);
      this.amt1 = "";
    });

    
    let loading = this.lc.create({
      content: 'Please wait...'
    });
  
    loading.present();
  
    setTimeout(() => {
      loading.dismiss();
    }, 15000);
  
      
this.register();
  }

else{
  let all = this.alertctrl.create({
    title: 'Plese select a plan ',
    buttons: ['Ok'],
  }); all.present();
  //this.Confrompass.setValue("");
  //this.passwor.setValue("");

}

}
}