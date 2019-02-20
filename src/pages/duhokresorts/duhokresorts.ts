import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Locations } from '../../model/location';
import { AddserviceplaceProvider } from '../../providers/addserviceplace/addserviceplace';
/**
 * Generated class for the DuhokresortsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-duhokresorts',
  templateUrl: 'duhokresorts.html',
})
export class DuhokresortsPage {
  locations:Locations={
    namePlace:'',
    linkFace:'',
  }

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public addserviceplaceProvider: AddserviceplaceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DuhokresortsPage');
  }


  addNewPlace(locations:Locations){
    this.addserviceplaceProvider.addLocationDohokResort(locations).then(ref => {
      this.showAlert()
    })
     // this.showAlert()
   
   }
   showAlert() {
     const alert = this.alertCtrl.create({
       title: '!شكراً لك',
       subTitle: '!تم الارسال بنجاح',
       buttons: ['تم']
     });
     alert.present();
   }
   
}
