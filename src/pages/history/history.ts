import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ShareserviceProvider } from '../../providers/shareservice/shareservice';

/**
 * Generated class for the HistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-history',
  templateUrl: 'history.html',
})
export class HistoryPage {
   uid:any;

  constructor(public navCtrl: NavController,public httc:HttpClient,public s:ShareserviceProvider, public navParams: NavParams) {
    this.uid=s.getuserid();

  }

getdaat(){
  let p={'fn':''}
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

}
