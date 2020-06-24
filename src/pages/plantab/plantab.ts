import { Component } from '@angular/core';
import { IonicPage, NavController ,NavParams} from 'ionic-angular';

/**
 * Generated class for the PlantabPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-plantab',
  templateUrl: 'plantab.html'
})
export class PlantabPage {

  addplanRoot = 'AddplanPage'
  editplanRoot = 'EditplanPage'
  displanRoot = 'DisplanPage'

  constructor(public navCtrl: NavController,public nv:NavParams) {
 
}
}
