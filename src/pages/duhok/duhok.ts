import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DuhokrestaurantPage } from '../duhokrestaurant/duhokrestaurant';
import { DuhokhotelPage } from '../duhokhotel/duhokhotel';
import { DuhokresortsPage } from '../duhokresorts/duhokresorts';
import { ThinltodoinduhokPage } from '../thinltodoinduhok/thinltodoinduhok';
/**
 * Generated class for the DuhokPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-duhok',
  templateUrl: 'duhok.html',
})
export class DuhokPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DuhokPage');
  }
  

  goToDuhokrestaurantPage(){
    this.navCtrl.push(DuhokrestaurantPage)
  }

  goToDuhokhotelPage(){
    this.navCtrl.push(DuhokhotelPage)
  }
  goToDuhokresortsPage(){
    this.navCtrl.push(DuhokresortsPage)
  }
  goToThinltodoinduhokPage(){
    this.navCtrl.push(ThinltodoinduhokPage)
  }
}
