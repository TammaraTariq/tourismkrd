import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';

import { ErbilPage } from '../erbil/erbil';
import { DuhokPage } from '../duhok/duhok';
import { SulaimaniyahPage } from '../sulaimaniyah/sulaimaniyah';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl: NavController , public alerCtrl: AlertController, public authServiceProvider:AuthServiceProvider) {

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


logout(){
  this.authServiceProvider.signOut()
this.navCtrl.setRoot(LoginPage)
}



}
