import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the PckgesPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pckges',
  templateUrl: 'pckges.html'
})
export class PckgesPage {

  newpckRoot = 'NewpckPage'
  apovpckRoot = 'ApovpckPage'
  activeRoot = 'ActivePage'


  constructor(public navCtrl: NavController) {}

}
