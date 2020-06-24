import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import  {FormGroup,FormBuilder,Validators, AbstractControl} from '@angular/forms'
import {HttpClient} from '@angular/common/http'
import {ShareserviceProvider} from '../../providers/shareservice/shareservice';
import { Forgetpass2Page } from '../forgetpass2/forgetpass2';

/**
 * Generated class for the ForgetpassPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgetpass',
  templateUrl: 'forgetpass.html',
})
export class ForgetpassPage {
 formgroup:FormGroup;
 emailfp:AbstractControl;
 obj:any;
 o2:any;
mno:any;
ot:any;

  constructor(public navCtrl: NavController,public sha:ShareserviceProvider,public httc:HttpClient, public navParams: NavParams,public formbuilder:FormBuilder) {
    this.formgroup=this.formbuilder.group({
      emailfp:['',Validators.compose([
        Validators.required,
        Validators.pattern('^[A-Z0-9a-z\\._%+-]+@([A-Za-z0-9-]+\\.)+[A-Za-z]{2,4}$')
      ])]
    });
    
   this. emailfp=this.formgroup.controls['emailfp'];
  
  }
nextp(){
  let p={fn:'forgetpss',emas:this.emailfp.value};
  this.httc.post('http://192.168.43.96/hmsproj/index.php',p).subscribe(data=>{
    console.log(this.emailfp.value);
    
    this.obj=JSON.stringify(data);
    this.o2=JSON.parse(this.obj);
    console.log(this.o2.length);

    console.log(this.o2)
    if(this.o2.length!=0){  
      this.mno=this.o2[0].mobile_number;
      this.sha.setmnoemail(this.emailfp.value,this.mno);
    
      let prm={'fn':'sendSms',mno:this.mno}
      this.httc.post('http://192.168.43.96/hmsproj/index.php',prm).subscribe(data=>{
        console.log(JSON.parse(JSON.stringify(data)));
        //console.log("OTP"+this.otp.value);
        this.ot=data;
        this.sha.setotp(data);
      });
      
      this.navCtrl.push(Forgetpass2Page,{"otps":this.ot});

    }

  })

}
  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgetpassPage');
  }

}
