import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { Locations } from '../../model/location';
import { AddserviceplaceProvider } from '../../providers/addserviceplace/addserviceplace';
/**
 * Generated class for the ErbilresortsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-erbilresorts',
  templateUrl: 'erbilresorts.html',
})
export class ErbilresortsPage {
  locations:Locations={
    namePlace:'',
    linkFace:'',
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    public addserviceplaceProvider: AddserviceplaceProvider) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ErbilresortsPage');
  }

  addNewPlace(locations:Locations){
    this.addserviceplaceProvider.addLocationErbilResort(locations).then(ref => {
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
