import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


  
data = {
  email:  '',
  password: ''
}




  constructor(public navCtrl: NavController, public navParams: NavParams ,
    public authServiceProvider:AuthServiceProvider,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }



  login(){

    let credentials = {
email: this.data.email,
password: this.data.password
    }

// this.authServiceProvider.signInWithEmail(credentials).then(
//   ()=> this.navCtrl.push(TabsPage),
//   error => console.log('error')
// )
this.authServiceProvider.signInWithEmail(credentials).then(
  ()=> this.navCtrl.setRoot(TabsPage),
  error => this.presentToast()
  // console.log('error')
  
)
  }




goToRegister(){
  this.navCtrl.push(RegisterPage)
}

presentToast() {
  const toast = this.toastCtrl.create({
    message: '!! الرجاء قم بالتسجيل اولاً ',
    duration: 3000
  });
  toast.present();
}
}
