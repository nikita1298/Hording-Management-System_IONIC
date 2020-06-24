import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ShareserviceProvider } from '../../providers/shareservice/shareservice';
import { HttpClient } from '@angular/common/http';

/**
 * Generated class for the ViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view',
  templateUrl: 'view.html',
})
export class ViewPage {
ut:any;
da:any;
  constructor(public navCtrl: NavController,public s:ShareserviceProvider,public httc:HttpClient, public navParams: NavParams) {
 this.ut=s.getutu();
 console.log(this.ut);
 this.get();

  }
get(){
  let p={'fn':'allpl',ut:this.ut}
  this.httc.post('http://192.168.43.96/hmsproj/index.php',p).subscribe(data=>{
console.log(data);
this.da=(JSON.parse(JSON.stringify(data)));
  });
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewPage');
  }

}
