import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ShareserviceProvider } from '../../providers/shareservice/shareservice';

import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the Forgetpass2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgetpass2',
  templateUrl: 'forgetpass2.html',
})
export class Forgetpass2Page {

  formgroup: FormGroup;

  otp: AbstractControl;
  ot: any;
  mno: any;
  constructor(public navCtrl: NavController, public al: AlertController, public nav: NavParams, public httc: HttpClient, public sha: ShareserviceProvider, public navParams: NavParams, public formbuilder: FormBuilder) {
    let a = sha.getmnoemail();
    this.formgroup = this.formbuilder.group({
      otp: ['', Validators.compose([
        Validators.required,
        Validators.pattern('')
      ])]
    });
    this.ot = sha.getotp();
    this.otp = this.formgroup.controls['otp'];

    console.log(a.e, a.m);
    this.mno = a.m;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Forgetpass2Page');
  }
  change() {
    console.log(this.otp.value+""+this.ot);
      console.log("match")
      let ale = this.al.create({

        subTitle: 'Time Duration for that you want',

        inputs: [
          {
            name: 'tids',
            placeholder: 'Months',
          }],

          enableBackdropDismiss:false,
          buttons: [
            {
              text: 'Cancel',
              role: 'cancel',
              handler: data => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'Send',
              handler: data => {
               /* var s=data.tids;
                var re = new RegExp("^(\\d+)$");
                var sd=s.charAt(0);
                let isValid=re.test(s);*/
     
                
                console.log("tisa"+data.tids);
                let param={'fn':'change','mno':this.mno,'npass':data};
                this.httc.post("http://192.168.43.96/hmsproj/index.php",param).subscribe(datas=>{
                  console.log("hfjhjhsj"+datas);
                })
              }
            }
          
          ],

      });ale.present();


    }
  
  
  chang() {

  }
}


