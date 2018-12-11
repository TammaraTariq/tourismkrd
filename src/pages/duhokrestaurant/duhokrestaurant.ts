import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser , InAppBrowserOptions } from '@ionic-native/in-app-browser';

/**
 * Generated class for the DuhokrestaurantPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-duhokrestaurant',
  templateUrl: 'duhokrestaurant.html',
})
export class DuhokrestaurantPage {
url1 : string = "https://www.facebook.com/maltarest/?hc_ref=ARQsr6pn-naAHtt0Qdcwv-rZm5Sk4LtZ86ShpXw3uI2npmpy6A3Q9rO8x5ftKPbrf-Y&fref=nf";
url2 : string = "https://www.facebook.com/VikingsPizzaDuhok/";
url3 : string = "https://www.facebook.com/MawallVeniceRestaurants/?ref=br_rs";
url4 : string = "https://www.facebook.com/bigchef.web/";
url5 : string = "https://www.facebook.com/Barhav.Restaurant/";
url6 : string = "https://www.facebook.com/Lunar-Cafe-And-Restaurant-621966564861600/?ref=py_c";
url7 : string = "https://www.facebook.com/Diamond.House.Restaurant.Coffee.Shop/photos/a.429777417402436/620211471692362/?type=1&theater";
url8 : string = "https://www.facebook.com/Nostalgia-Coffee-Duhok-2047522602188392/";
url9 : string = "https://www.facebook.com/neilsrest.sweets/";
url10 : string = "https://www.facebook.com/asliborekduhok/";
url11 : string = "https://www.facebook.com/%D8%A8%D9%8A%D8%AA%D8%B2%D8%A7-%D8%AF%D9%87%D9%88%D9%83-Duhok-pizza-1796270257262928/";
url12 : string = "https://www.facebook.com/texaschickenduhok/";
url13 : string = "https://www.facebook.com/glasshousecoffe/";
url14 : string = "https://www.facebook.com/Big-Bite-145162402713345/";
url15 : string = "https://www.facebook.com/Dade-Rest-609505542491647/";
url16 : string = "https://www.facebook.com/DiwanShishaLounge/";
url17 : string = "https://www.facebook.com/cchduhok/";
url18 : string = "https://www.facebook.com/%D8%AE%D8%A7%D9%86-%D9%83%D8%A8%D8%A7%D8%A8-1399737713626548/";
url19 : string ="https://www.facebook.com/Geverke-Restaurant-730068670436605/"
url20 : string = "https://www.facebook.com/Rudaw-Cafe-1059599574114840/"
url21 : string = "https://www.facebook.com/goldenhouseduhok/"

url22 : string = "https://www.facebook.com/%D8%AE%D8%A7%D8%B1%D9%86%DA%AF%D9%87-%D9%87%D8%A7-%D8%A8%D8%A7%D8%A8%D8%A6-%D8%B4%D8%A7%D9%87%D9%89-2006819776258818/"

url23 : string ="https://www.facebook.com/%D9%85%D8%B7%D8%B9%D9%85-%D8%A7%D8%B3%D9%85%D8%A7%D9%83-%D8%B2%D8%B1%D9%8A%D8%A7-1684023188591424/"
url24 : string = "https://www.facebook.com/grandpakunafe/?ref=br_rs"
url25 : string = "https://www.facebook.com/kababbekhal/?ref=br_rs"
url26 : string = "https://www.facebook.com/ZadaCafeDuhok/?ref=br_rs";
url27 : string = "https://www.facebook.com/2-Sultandoner-299276330513341/"
url28 : string = "https://www.facebook.com/Venicia-Cafe-Duhok-1476293969331558/"
url29 : string = "https://www.facebook.com/Demhat-Resturant-1017876518377136/"
url30 : string = "https://www.facebook.com/El-Paso-Duhok-1640890676214641/"
url31 : string ="https://www.facebook.com/Sarkypizza/"
url32 : string = "https://www.facebook.com/XaringehaForat/"
url33 : string = "https://www.facebook.com/milanosofficial/"

constructor(public navCtrl: NavController, public navParams: NavParams, private inappbrowser: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DuhokrestaurantPage');
  }

  openfacebook(){
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

}
