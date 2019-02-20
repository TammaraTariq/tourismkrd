import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { InAppBrowser , InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { Locations } from '../../model/location';
import { AddserviceplaceProvider } from '../../providers/addserviceplace/addserviceplace';
 
/**
 * Generated class for the SulaimaniyahresturantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sulaimaniyahresturant',
  templateUrl: 'sulaimaniyahresturant.html',
})
export class SulaimaniyahresturantPage {
  locations:Locations={
    namePlace:'',
    linkFace:'',
  }





  url1 : string = "https://www.facebook.com/Falafelo-%D9%81%D9%84%D8%A7%D9%81%D9%8A%D9%84%D9%88-947983028562346/"
  url2 : string = "https://www.facebook.com/Dawa-Restaurant-5-Stars-237943596389457/?rf=177935322276871"
url3 : string = "https://www.facebook.com/DiwanRestaurantCafe/"
url4 : string = "https://www.facebook.com/Mangal-Restaurant-%D8%B1%DB%8E%D8%B3%D8%AA%DB%86%D8%B1%D8%A7%D9%86%D8%AA%D9%89-%D9%85%D9%86%D9%82%D9%84-515755385248973/"
url5 : string = "https://www.facebook.com/PapacedoSuli/"
url6 : string = "https://www.facebook.com/moka.and.more.sulaimani/?rf=505060599590642"
url7 : string = "https://www.facebook.com/Pizza1Plus/?rf=199052780146092"
url8 : string = "https://www.facebook.com/Prontosuly/"
url9 : string = "https://www.facebook.com/caesarsulimanyah/"
url10 : string = "https://www.facebook.com/pages/biz/restaurant-46001/Chias-Restaurant-1926290144260440/"
url11 : string = "https://www.facebook.com/DALsBurgerSlemani/"
url12 : string = "https://www.facebook.com/cheshtxanayxatwklthum/?rf=165882580431713"
url13 : string = "https://www.facebook.com/SoHoslemani/"
url14 : string = "https://www.facebook.com/Cindyhous/"
url15 : string = "https://www.facebook.com/dabashan.resturant/?rf=392257367509100"
url16 : string = "https://www.facebook.com/Fatoshrest/?fref=nf"
url17 : string = "https://www.facebook.com/damasquino.sulay/"
url18 : string = "https://www.facebook.com/heltonrestcafe/"
url19 : string = "https://www.facebook.com/Diyarbakir-Sofrasi-REST-1226988080692145/"
url20 : string = "https://www.facebook.com/halsho.restaurant/" 
url21 : string = "https://www.facebook.com/%D9%85%D8%B7%D8%B9%D9%85-%D8%A5%D9%8A%D9%81%D9%84-%DA%95%DB%8C%D8%B3%D8%AA%DB%86%D8%B1%D8%A7%D9%86%D8%AA%DB%8C-%D8%A6%DB%8C%DA%A4%DA%B5-Eiffel-restaurant-330638694061220/"
url22 : string ="https://www.facebook.com/blackhall.slemani/"
url23 : string ="https://www.facebook.com/xanicafe/"
url24 : string = "https://www.facebook.com/zakehdghdhd/"
url25 : string = "https://www.facebook.com/Dabashan2rest/"
url26 : string = "https://www.facebook.com/hamababane94/"
url27 : string = "https://www.facebook.com/kaptn.gril/"
url28 : string = "https://www.facebook.com/viewcafe.sul/"
url29 : string = "https://www.facebook.com/LordRestCafe/"
url30 : string = "https://www.facebook.com/shawqi.restaurant/"
url31 : string = "https://www.facebook.com/jollacafe/"
url32 : string = "https://www.facebook.com/silacafeandrest/"
url33 : string = "https://www.facebook.com/COMBO.2014/"
url34 : string ="https://www.facebook.com/xebze/"
url35 : string = "https://www.facebook.com/CityPizzaSuli/"
url36 : string = "https://www.facebook.com/whitelifecafe/"
url37 : string ="https://www.facebook.com/Ali-Baba-doner-pizza-%D8%B9%D9%84%DB%8C-%D8%A8%D8%A7%D8%A8%D8%A7-423945467950572/"
url38 : string = "https://www.facebook.com/mercirest/"
url39 : string = "https://www.facebook.com/%D9%85%D8%A7%DA%B5%DB%8C-%D9%85%D9%86%D8%AF%DB%8C-189072818592026/" 
url40 : string = "https://www.facebook.com/Pepper-by-Nawras-1976947105667183/"
url41 : string = "https://www.facebook.com/BlodanCafe/"
url42 : string = "https://www.facebook.com/Munchen-Cafe_%D9%83%D8%A7%D9%81%D8%AA%D8%B1%D9%8A%D8%A7%D9%89-%D9%85%D9%8A%D9%88%D9%86%D8%AE-331853950590655/"
url43 : string = "https://www.facebook.com/NinovaTurkish/"
url44 : string = "https://www.facebook.com/caffe11/"
url45 : string = "https://www.facebook.com/GrillHouse/"
url46 : string = "https://www.facebook.com/ParadiseRest.Cafe/"
url47 : string = "https://www.facebook.com/ChwalaRestaurant/"
url48 : string = "https://www.facebook.com/Roma.Majidi.Mall/"
url49 : string = "https://www.facebook.com/amnasurakanetcafe/"
url50 : string = "https://www.facebook.com/florafastfood/"
url51 : string = "https://www.facebook.com/HAM-restaurant-388876084646871/" 
url52 : string ="https://www.facebook.com/Twinsfastf/"
url53 : string = "https://www.facebook.com/madoslemani/"
url54 : string = "https://www.facebook.com/%DA%95%DB%8E%D8%B3%D8%AA%DB%86%D8%B1%D8%A7%D9%86%D8%AA%DB%8C-%DA%AF%DB%86%DB%8C%DA%98%DB%95-1922186938052513/"
url55: string = "https://www.facebook.com/YummyYummyOffical/"
url56 : string = "https://www.facebook.com/gobitta.iq/"
url57 : string = "https://www.facebook.com/QaiwanResturant/"
url58 : string = "https://www.facebook.com/See-You-Restaurant-Caf%C3%A9-1009117242494318/"
url59 : string = "https://www.facebook.com/Mali-Classic-%D9%83%D8%A7%D9%81%D8%AA%D8%B1%D9%8A%D8%A7%D9%89-%D9%83%D9%84%D8%A7%D8%B3%D9%8A%D9%83-684610564927235/"
url60 : string = "https://www.facebook.com/freshjuicycrunchychicken/"
url61 : string = "https://www.facebook.com/mazox1/"
url62 : string = "https://www.facebook.com/ACCafe.AC/"
url63 : string = "https://www.facebook.com/Shkofarest-1683010971780990/"
url64 : string = "https://www.facebook.com/nrtpizza/"
url65 : string = "https://www.facebook.com/resturanti.zrebar/" 
url66 : string = "https://www.facebook.com/CowFastfood/"
url67 : string = "https://www.facebook.com/%D8%B4%D8%A7%D9%88%D8%B1%D9%85%D8%A7%DB%8C-%D8%AA%D8%A7%DA%A4-207025443503076/"
url68 : string = "https://www.facebook.com/TajoFood/"
url69 : string = "https://www.facebook.com/MangoResturants/"
url70 : string = "https://www.facebook.com/Chief-Restaurant-%DA%95%DB%8E%D8%B3%D8%AA%DB%86%D8%B1%D8%A7%D9%86%D8%AA%DB%8C-%D8%B4%DB%8E%D9%81-122226045066899/"
url71 : string = "https://www.facebook.com/Hot-food-154953251796764/"
url72 : string = "https://www.facebook.com/shawrmaqasralsham/"
url73 : string = "https://www.facebook.com/FairouzcafM/"
url74 : string = "https://www.facebook.com/GUSTO-568231296660438/"
url75 : string = "https://www.facebook.com/FRIEDPOTATOO/"
url76 : string = "https://www.facebook.com/PatraRestaurant/"
url77: string = "https://www.facebook.com/avesta.restaurant/"
url78 : string = "https://www.facebook.com/Espressocafe.suli/" 
url79 : string = "https://www.facebook.com/mixcafe.co/"
url80 : string = "https://www.facebook.com/snapshawarma/"
url81 : string = "https://www.facebook.com/Aroma-cafe-%D8%A7%D8%B1%D9%88%D9%85%D8%A7-%D9%83%D8%A7%D9%81%D9%8A-754273024962195/"
url82 : string = "https://www.facebook.com/Dargazen/"
url83 : string = "https://www.facebook.com/Cheshtxana-w-Kababi-Sardar-%DA%86%D9%8A%D8%B4%D8%AA%D8%AE%D8%A7%D9%86%D9%87-%D9%88-%D9%83%D9%87-%D8%A8%D8%A7%D8%A8%D9%8A-%D8%B3%D9%87-%D8%B1%D8%AF%D8%A7%D8%B1-1393859770905017/?ref=nearby_places"
url84 : string = "https://www.facebook.com/Tehran-restaurant-488138711242235/"
url85 : string = "https://www.facebook.com/KroketFood/"
url86 : string = "https://www.facebook.com/vegasnightcafe/"
url87 : string = "https://www.facebook.com/Athena-Gyros-Slemani-1399376746981817/" 
url88 : string = "https://www.facebook.com/madibacafee/"
url89 : string = "https://www.facebook.com/Protein-court-1588220164590921/"
url90 : string = "https://www.facebook.com/Shawrmay-shayan-2063289363950475/"
url91 : string = "https://www.facebook.com/ChocolatePoint2018/?ref=nearby_places"

constructor(public navCtrl: NavController, public navParams: NavParams, private inappbrowser: InAppBrowser, public alertCtrl: AlertController,
  public addserviceplaceProvider: AddserviceplaceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SulaimaniyahresturantPage');
  }
  
  openfacebook1(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url1, '_self', options)
  }
  openfacebook2(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url2, '_self', options)
  }
  openfacebook3(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url3, '_self', options)
  }
  openfacebook4(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url4, '_self', options)
  }
  openfacebook5(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url5, '_self', options)
  }
  openfacebook6(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url6, '_self', options)
  }
  openfacebook7(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url7, '_self', options)
  }

  openfacebook8(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url8, '_self', options)
  }
  openfacebook9(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url9, '_self', options)
  }
  openfacebook10(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url10, '_self', options)
  }
  openfacebook11(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url11, '_self', options)
  }
  openfacebook12(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url12, '_self', options)
  }
  openfacebook13(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url13, '_self', options)
  }
  openfacebook14(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url14, '_self', options)
  }
  openfacebook15(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url15, '_self', options)
  }
  openfacebook16(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url16, '_self', options)
  }
  openfacebook17(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url17, '_self', options)
  }
  openfacebook18(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url18, '_self', options)
  }
  openfacebook19(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url19, '_self', options)
  }
  openfacebook20(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url20, '_self', options)
  }
  openfacebook21(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url21, '_self', options)
  }
  openfacebook22(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url22, '_self', options)
  }
  openfacebook23(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url23, '_self', options)
  }
  openfacebook24(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url24, '_self', options)
  }
  openfacebook25(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url25, '_self', options)
  }
  openfacebook26(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url26, '_self', options)
  }
  openfacebook27(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url27, '_self', options)
  }
  openfacebook28(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url28, '_self', options)
  }

  openfacebook29(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url29, '_self', options)
  }
  openfacebook30(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url30, '_self', options)
  }
  openfacebook31(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url31, '_self', options)
  }
  openfacebook32(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url32, '_self', options)
  }
  openfacebook33(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url33, '_self', options)
  }

  openfacebook34(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url34, '_self', options)
  }
  openfacebook35(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url35, '_self', options)
  }
  openfacebook36(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url36, '_self', options)
  }
  openfacebook37(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url37, '_self', options)
  }
  openfacebook38(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url38, '_self', options)
  }
  openfacebook39(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url39, '_self', options)
  }
  openfacebook40(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url40, '_self', options)
  }

  openfacebook41(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url41, '_self', options)
  }
  openfacebook42(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url42, '_self', options)
  }
  openfacebook43(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url43, '_self', options)
  }

  openfacebook44(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url44, '_self', options)
  }
  openfacebook45(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url45, '_self', options)
  }
  openfacebook46(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url46, '_self', options)
  }
  openfacebook47(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url47, '_self', options)
  }
  openfacebook48(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url48, '_self', options)
  }
  openfacebook49(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url49, '_self', options)
  }
  openfacebook50(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url50, '_self', options)
  }
  openfacebook51(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url51, '_self', options)
  }
  openfacebook52(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url52, '_self', options)
  }
  openfacebook53(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url53, '_self', options)
  }
  openfacebook54(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url54, '_self', options)
  }
  openfacebook55(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url55, '_self', options)
  }
  openfacebook56(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url56, '_self', options)
  }
  openfacebook57(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url57, '_self', options)
  }
  openfacebook58(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url58, '_self', options)
  }
  openfacebook59(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url59, '_self', options)
  }
  openfacebook60(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url60, '_self', options)
  }
  openfacebook61(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url61, '_self', options)
  }
  openfacebook62(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url62, '_self', options)
  }
  openfacebook63(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url63, '_self', options)
  }
  openfacebook64(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url64, '_self', options)
  }
  openfacebook65(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url65, '_self', options)
  }
  openfacebook66(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url66, '_self', options)
  }
  openfacebook67(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url67, '_self', options)
  }
  openfacebook68(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url68, '_self', options)
  }
  openfacebook69(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url69, '_self', options)
  }
  openfacebook70(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url70, '_self', options)
  }
  openfacebook71(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url71, '_self', options)
  }
  openfacebook72(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url72, '_self', options)
  }
  openfacebook73(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url73, '_self', options)
  }
  openfacebook74(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url74, '_self', options)
  }
  openfacebook75(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url75, '_self', options)
  }
  openfacebook76(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url76, '_self', options)
  }

  openfacebook77(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url77, '_self', options)
  }
  openfacebook78(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url78, '_self', options)
  }
  openfacebook79(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url79, '_self', options)
  }
  openfacebook80(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url80, '_self', options)
  } 
  openfacebook81(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url81, '_self', options)
  }
  openfacebook82(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url82, '_self', options)
  }
  openfacebook83(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url83, '_self', options)
  }
  openfacebook84(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url84, '_self', options)
  }
  openfacebook85(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url85, '_self', options)
  }
  openfacebook86(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url86, '_self', options)
  }
  openfacebook87(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url87, '_self', options)
  }
  openfacebook88(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url88, '_self', options)
  }
  openfacebook89(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url89, '_self', options)
  }
  openfacebook90(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url90, '_self', options)
  }
  openfacebook91(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url91, '_self', options)
  }

  
addNewPlace(locations:Locations){
  this.addserviceplaceProvider.addLocationSulimaniRest(locations).then(ref => {
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
