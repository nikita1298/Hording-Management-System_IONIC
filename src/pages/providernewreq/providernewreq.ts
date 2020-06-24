import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ShareserviceProvider } from '../../providers/shareservice/shareservice';
import { ProvidereqimgonlyPage } from '../providereqimgonly/providereqimgonly';
import { ProvidereqdataPage } from '../providereqdata/providereqdata';

/**
 * Generated class for the ProvidernewreqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-providernewreq',
  templateUrl: 'providernewreq.html',
})
export class ProvidernewreqPage {
  uid:any;
  o2:any;
  obj:any;
  da:any;
  constructor(public navCtrl: NavController,public al:AlertController,public sha:ShareserviceProvider,public httc:HttpClient ,public navParams: NavParams) {
  this.uid=sha.getuserid();
  console.log(this.uid);
  this.getdata();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProvidernewreqPage');
  }
getdata(){

  let pm={'fn':'pnewreq','uid':this.uid};
  this.httc.post('http://192.168.43.96/hmsproj/index.php',pm).subscribe(data=>{
    console.log(data);
    this.obj = JSON.stringify(data);
    this.o2 = JSON.parse(this.obj);
  console.log("IMAGES"+this.o2[0]);
    this.da=this.o2;
  });
}
viewInfo(i){
  console.log("iii"+i);
  console.log(this.o2[i]);
  this.navCtrl.push(ProvidereqdataPage,{'data':this.o2[i]});

}

onlyimage(u){

  console.log("u"+u);
  var i=u;
  let arr=this.o2[i].img;
  this.navCtrl.push(ProvidereqimgonlyPage,{'image':arr,'i':i,'o2':this.o2});
}
action(i){
let actio=this.al.create({
  subTitle:'Request Action',
  enableBackdropDismiss:false,
  inputs: [
    {
      type: 'radio',
      label: 'Approve Request',
      value: 'y'
    },
    {
      type: 'radio',
      label: 'Cancle Request',
      value: 'n'
    }
  ],
  buttons: [
    {
      text: 'Cancel',
      role: 'cancel',
      handler: () => {
        console.log('Cancel clicked');
      }
    },
    {
      text: 'OK',
      handler: (data) => {
        console.log('OK clicked: ' +data+"i"+i);
        var ids=i;
        var ac;
        if(data=='y'){
          ac='y';
        }
        if(data=='n'){
          ac='n';
        }
        if(ac!=null){
          //console.log(ac+"acc");
          let prm={'fn':'proreqresponse','ids':ids,'resst':ac}
          this.httc.post("http://192.168.43.96/hmsproj/index.php",prm).subscribe(datas=>{
console.log("datas"+JSON.stringify(datas));
this.getdata();
if(JSON.stringify(datas)=="s"){

}
          });
        }
      
      }
    }
  ]
});
actio.present();
console.log("onn");

}
}

