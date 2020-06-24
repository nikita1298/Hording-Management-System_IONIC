import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ShareserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ShareserviceProvider {
  
    userid:any;
    email:any;
    mno:any;
    ut:any;
    ot:any;
  constructor(public http: HttpClient) {
    console.log('Hello ShareserviceProvider Provider');
    this.userid=null;
  }
 setuserid(id){
   this.userid=id;

 }
 getuserid(){
   return this.userid;
 }
 setutu(ut){
  this.ut=ut;

 }

 getutu(){
  return this.ut;

 }
 setotp(ot){
   this.ot=ot;
 }
 
 getotp(){
 return this.ot;
}
 setmnoemail(email,mno){
this.email=email;
this.mno=mno;
 }
 getmnoemail(){
   let a= {e:this.email,m:this.mno};
   return a;
 }
}
