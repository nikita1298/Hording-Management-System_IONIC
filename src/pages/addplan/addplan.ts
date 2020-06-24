import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormGroup,FormBuilder,AbstractControl, Validators} from '@angular/forms'
import { Http } from '@angular/http';

/**
 * Generated class for the AddplanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addplan',
  templateUrl: 'addplan.html',
})
export class AddplanPage {
  formgroup:FormGroup;
amt:AbstractControl;
dur:AbstractControl;
uty:AbstractControl;
act:AbstractControl;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,public formbuilder:FormBuilder ) {
  
  this.formgroup=formbuilder.group({
act:['',Validators.required],
amt:['',Validators.required],
uty:['',Validators.required],
dur:['',Validators.required],
  });
  this.act=this.formgroup.controls['act'];
  this.amt=this.formgroup.controls['amt'];
  this.uty=this.formgroup.controls['uty'];
  this.dur=this.formgroup.controls['dur'];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddplanPage');
  }
  addplan(){
    let param={fn:'addplan',uty:this.uty.value,dur:this.dur.value,amt:this.amt.value,act:this.act.value};
  this.http.post('http://localhost/hmsproj/index.php',param).subscribe(data=>{
console.log(data);
  });

  }

}
