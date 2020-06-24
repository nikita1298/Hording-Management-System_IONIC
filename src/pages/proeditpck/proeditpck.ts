import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProeditpckPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-proeditpck',
  templateUrl: 'proeditpck.html',
})
export class ProeditpckPage {
   editable:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
this.editable=false;
    
  }

  setEditable() {
      this.editable = true;
      console.log(this.editable);
}

checkBlur(){
  console.log("BLUR");
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProeditpckPage');
  }

}
