import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,AlertController} from 'ionic-angular';
import { AddSuggestion } from '../../model/addsuggestion';
import { AddserviceplaceProvider } from '../../providers/addserviceplace/addserviceplace';
/**
 * Generated class for the SuggestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-suggestion',
  templateUrl: 'suggestion.html',
})
export class SuggestionPage {


  addSuggestion:AddSuggestion={
    NewSuggestion:'',
  }


  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public addserviceplaceProvider: AddserviceplaceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuggestionPage');
  }


  sendSuggestion(addSuggestion:AddSuggestion){
    this.addserviceplaceProvider.addSuggestionInKrd(addSuggestion).then(ref => {
      this.showAlert()
    })
     // this.showAlert()
   
   }
   showAlert() {
     const alert = this.alertCtrl.create({
       title: '',
       subTitle: '!تم الارسال بنجاح',
       buttons: ['تم']
     });
     alert.present();
   }


}
