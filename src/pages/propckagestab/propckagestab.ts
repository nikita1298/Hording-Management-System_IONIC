import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the PropckagestabPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-propckagestab',
  templateUrl: 'propckagestab.html'
})
export class PropckagestabPage {

  addpackRoot = 'AddpackPage'
  proeditpckRoot = 'ProeditpckPage'


  constructor(public navCtrl: NavController) {}

}
