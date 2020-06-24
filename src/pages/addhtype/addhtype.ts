import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { Http, Jsonp } from '@angular/http';

import { HttpClient } from '@angular/common/http';
import { IonicPage, AlertController } from 'ionic-angular';


import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

/**
 * Generated class for the AddhtypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-addhtype',
  templateUrl: 'addhtype.html',
})
export class AddhtypePage {
  
  formgroup: FormGroup;
  email: AbstractControl;
  hdesc: AbstractControl;
  obj: any;
  o2: any;
  logemail: any;
  logpassword: any;

  constructor(public navCtrl: NavController, public navPram:NavParams, public httc: HttpClient, public http: Http, public navParams: NavParams, public formbuilder: FormBuilder) {
  
    this.formgroup = formbuilder.group({
      email: ['', Validators.required],
      hdesc: ['', Validators.required],

    });
    
    this.email = this.formgroup.controls['email'];
    this.hdesc = this.formgroup.controls['hdesc'];
    this.email.setValue("");
    
   this.hdesc.setValue("");
 
  }
  addhtype(){
    console.log(this.email.value,this.hdesc.value);
    let r={fn:'addhtype',tname:this.email.value,tdesc:this.hdesc.value};
    this.http.post('http://localhost/hmsproj/index.php', r).subscribe(data => {
      console.log(JSON.stringify(  data));
  });
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddhtypePage');
  }

}
