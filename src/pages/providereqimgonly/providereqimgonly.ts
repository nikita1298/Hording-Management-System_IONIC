import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProvidernewreqPage } from '../providernewreq/providernewreq';

/**
 * Generated class for the ProvidereqimgonlyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-providereqimgonly',
  templateUrl: 'providereqimgonly.html',
})
export class ProvidereqimgonlyPage {      
im:any;
ia:any=[];
i:any;
o2:any;
count:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

//this.im=this.o2[this.i].img;
this.im=navParams.get('image');
    this.count=Object.keys(this.im).length;
   for(let i=1;i<=Object.keys(this.im).length;i++){
     console.log(this.im['image'+i]);
     this.ia.push(this.im['image'+i]);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProvidereqimgonlyPage');
  }
  close(){
    this.navCtrl.push(ProvidernewreqPage);
  }
}
