import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ResturanterbilPage } from '../resturanterbil/resturanterbil';
import { ErbilhotelPage } from '../erbilhotel/erbilhotel';
import { ErbilresortsPage }from '../erbilresorts/erbilresorts';
import { ThinktodoinerbilPage } from '../thinktodoinerbil/thinktodoinerbil';
/*
 * Generated class for the ErbilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-erbil',
  templateUrl: 'erbil.html',
})
export class ErbilPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ErbilPage');
  }




  goToResturanterbilPage(){
    this.navCtrl.push(ResturanterbilPage)
  }
  goToErbilhotelPage(){
    this.navCtrl.push(ErbilhotelPage)
  }
  goToErbilresortsPage(){
    this.navCtrl.push(ErbilresortsPage)
  }
  goToThinktodoinerbilPage(){
    this.navCtrl.push(ThinktodoinerbilPage)
  }
}
