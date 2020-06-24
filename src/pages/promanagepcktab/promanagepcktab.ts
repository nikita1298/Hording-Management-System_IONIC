import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the PromanagepcktabPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-promanagepcktab',
  templateUrl: 'promanagepcktab.html'
})
export class PromanagepcktabPage {

  propckapproveRoot = 'PropckapprovePage'
  propckstateRoot = 'PropckstatePage'
  propckrejRoot = 'PropckrejPage'


  constructor(public navCtrl: NavController) {}

}
