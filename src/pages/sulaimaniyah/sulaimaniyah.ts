import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SulaimaniyahresturantPage } from '../sulaimaniyahresturant/sulaimaniyahresturant';
import { SulaimaniyahhotelPage } from '../sulaimaniyahhotel/sulaimaniyahhotel';
import { SulaimaniyahresortsPage } from '../sulaimaniyahresorts/sulaimaniyahresorts';
import { ThingtodoinsulimaniayPage } from '../thingtodoinsulimaniay/thingtodoinsulimaniay';

/**
 * Generated class for the SulaimaniyahPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sulaimaniyah',
  templateUrl: 'sulaimaniyah.html',
})
export class SulaimaniyahPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SulaimaniyahPage');
  }
  goToSulaimaniyahresturantPage(){
    this.navCtrl.push(SulaimaniyahresturantPage)
  }

  goToSulaimaniyahhotelPage(){
    this.navCtrl.push(SulaimaniyahhotelPage)
  }
  goToSulaimaniyahresortsPage(){
    this.navCtrl.push(SulaimaniyahresortsPage)
  }
  goToThingtodoinsulimaniayPage(){
    this.navCtrl.push(ThingtodoinsulimaniayPage)
  }
}
