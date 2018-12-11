import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { ErbilPage } from '../erbil/erbil';
import { DuhokPage } from '../duhok/duhok';
import { SulaimaniyahPage } from '../sulaimaniyah/sulaimaniyah'
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController , public alerCtrl: AlertController) {

  }
 



  goToErbilPage(){
  this.navCtrl.push(ErbilPage)
 
}

goToDuhokPage(){
  this.navCtrl.push(DuhokPage)
 
}

goToSulaimaniyahPage(){
  this.navCtrl.push(SulaimaniyahPage)
} 

}
