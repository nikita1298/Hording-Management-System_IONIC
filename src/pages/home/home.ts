import { Component } from '@angular/core';
import { NavController,AlertController,ModalController ,ModalOptions} from 'ionic-angular';
import  {LoginPage} from '../login/login';
import { BuyersPage } from '../buyers/buyers';
import { PlansPage } from '../plans/plans';
import {PlansPageModule} from '../plans/plans.module';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})
export class HomePage {
 

   ImageArray:any=[];
  constructor(public navCtrl: NavController,public pl:PlansPageModule,public alertctrl:AlertController,private modal:ModalController) {
    this.ImageArray=[
  {'image':'../../assets/img/i2.jpg' ,'active':'true'},
  {'image':'../../assets/img/i1.jpg'},
  {'image':'../../assets/img/ims3.jpg'},
]

  }
dplans(){
  const mymo:ModalOptions={
    showBackdrop:true,
    enableBackdropDismiss:false
  };
  const mymodel=  this.modal.create(PlansPage,null,{enableBackdropDismiss:false});
  mymodel.present();
  console.log("LOsjjdkjds");
   
  }
  register(){
    this.navCtrl.push(BuyersPage);


  }
  logs(){
    this.navCtrl.push(LoginPage);
  }

}
