import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the ClientrequestPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-clientrequest',
  templateUrl: 'clientrequest.html'
})
export class ClientrequestPage {

  clientapprovereqRoot = 'ClientapprovereqPage'
  clientpendreqRoot = 'ClientpendreqPage'
  clientrejreqRoot = 'ClientrejreqPage'


  constructor(public navCtrl: NavController) {}

}
