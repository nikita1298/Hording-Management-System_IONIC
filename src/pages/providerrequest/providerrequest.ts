import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the ProviderrequestPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-providerrequest',
  templateUrl: 'providerrequest.html'
})
export class ProviderrequestPage {

  providernewreqRoot = 'ProvidernewreqPage'
  providerapprovereqRoot = 'ProviderapprovereqPage'


  constructor(public navCtrl: NavController) {}

}
