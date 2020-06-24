import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from '@angular/common/http'
import {HideheaderDirective} from '../../directives/hideheader/hideheader'
/**
 * Generated class for the EditplanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editplan',
  templateUrl: 'editplan.html',
})
export class EditplanPage {
  apro:any=[];
  acli:any;
  ar:any;
  obj:any;
  o2:any;
  act:any;

  constructor(public navCtrl: NavController,public header:HideheaderDirective,public httc:HttpClient, public navParams: NavParams) {
  
  this.listplans();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditplanPage');
  }
  listplans(){
      this.httc.get("http://localhost/hmsproj/editplan.php").subscribe(data=>{
       
        this.obj=JSON.stringify(data);
        
        this.o2=JSON.parse(this.obj);
        this.ar=data;
       
      });
      this.httc.get("http://localhost/hmsproj/editplansc.php").subscribe(datas=>{
       
        this.obj=JSON.stringify(datas);
        
        this.o2=JSON.parse(this.obj);
      //  if(this.o2!='N')
        this.acli=datas;
       
      });
      
  }
delclick(pplan_id:number){
//  console.log(pplan_id);

}
clicl(ii){
  var s=ii.srcElement.id;

  console.log(s);
}

edt(ii){
  var s=ii.srcElement.id;

  console.log(s);
}

}
