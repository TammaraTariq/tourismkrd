import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {


  data = {
    name: '',
    email:  '',
    password: ''
  }
  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public authServiceProvider:AuthServiceProvider,
    public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  register(){


    let credentials = {
      name: this.data.name,
      email: this.data.email,
      password: this.data.password
          }
      
      this.authServiceProvider.signUp(credentials).then(
        ()=> this.navCtrl.setRoot(TabsPage),
        error => this.presentToast()
        // console.log('error')
      )

  }



  presentToast() {
    const toast = this.toastCtrl.create({
      message: '!! فشل تسجيل الدخول الرجاء حاول مرة اخرى ',
      
      duration: 3000
    });
    toast.present();
  }
}
