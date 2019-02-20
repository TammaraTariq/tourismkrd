import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { InAppBrowser , InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { Locations } from '../../model/location';
import { AddserviceplaceProvider } from '../../providers/addserviceplace/addserviceplace';
 
/**
 * Generated class for the ResturanterbilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resturanterbil',
  templateUrl: 'resturanterbil.html',
})
export class ResturanterbilPage {


  locations:Locations={
    namePlace:'',
    linkFace:'',
  }



url : string = "https://www.facebook.com/salehia.erbil/";
url1 : string ="https://www.facebook.com/abcrestauranterbil/";
url2 : string = "https://www.facebook.com/janna.erbil/";
url3 : string = "https://www.facebook.com/fulla.erbil/";
url4 : string = "https://www.facebook.com/AyamAlkhawali/";
url5 : string = "https://www.facebook.com/pregoankawa/";
url6 : string = "https://www.facebook.com/Rabowah.Alsham/";
url7 : string = "https://www.facebook.com/today.restaurant/?hc_ref=ARQAN0PpqmF5TFRVNN0HHoV2sUgq8mBPi9YH2jlCNkWVaJjimZPGmWrHQSdGkMRJWSE&fref=nf";
url8 : string = "https://www.facebook.com/mandiplate2/";
url9 : string = "https://www.facebook.com/RobertsRestaurantErbil/";
url10 : string = "https://www.facebook.com/Rest.Karam.alSham/";
url11 : string ='https://www.facebook.com/Top-Organic-Cafe-Rest-1479901295436218/';
url12 : string = "https://www.facebook.com/lofterbil/";
url13 : string = "https://www.facebook.com/hiland.fastfood/";
url14 : string = "https://www.facebook.com/tajerbil/";
url15 : string = "https://www.facebook.com/panorama.erbil/";
url16 : string = "https://www.facebook.com/gourmetdamas/";
url17 : string = "https://www.facebook.com/KhanAlwazerErbil/";
url18 : string = "https://www.facebook.com/2in1erbil/?eid=ARC-vZJCMy-XRphUC_AHdurnoRbG9H0lWgnnFoX03k9-AfSsC8X5rKUV5MLOMnDlqXA0FPiHSb-0pDRw";
url19 : string = "https://www.facebook.com/%D9%85%D8%B7%D8%B9%D9%85-%D8%B5%D9%85%D8%AF-Samad-Restaurant-315110855209084/";

url20 : string = "https://www.facebook.com/ZahleRestaurantErbil/";
url21 : string = "https://www.facebook.com/%D9%85%D8%B7%D8%B9%D9%85-%D9%83%D8%A8%D8%A7%D8%A8-%D9%8A%D8%A7%D8%B3%D9%8A%D9%86-108517806532915/";
url22 : string = "https://www.facebook.com/%D9%85%D8%B7%D8%B9%D9%85-%D9%88%D9%83%D8%A7%D9%81%D9%8A%D9%87-%D9%81%D9%8A%D9%86%D9%8A%D8%B3%D8%A7-318835005169410/";
url23 : string = "https://www.facebook.com/%D9%85%D8%B7%D8%B9%D9%85-%D8%B6%D9%8A%D9%88%D9%81-%D8%A7%D9%84%D8%B3%D9%84%D8%B7%D8%A7%D9%86-158084108191407/";
url24 : string = "https://www.facebook.com/Shahmiran.restaurant/";
url25 : string = "https://www.facebook.com/SplendorErbil/";
url26 : string = "https://www.facebook.com/ToastyRestaurant/";
url27 : string = "https://www.facebook.com/%D9%85%D8%B7%D8%B9%D9%85-%D8%AD%D8%AF%D8%A7%D8%A6%D9%82-%D8%A7%D9%84%D8%B4%D8%A7%D9%85-1213727192057552/";
url28 : string = "https://www.facebook.com/shamshariferbil/";
url29 : string = "https://www.facebook.com/BranchErbil/";
url30 : string = "https://www.facebook.com/Qassioun.alsham/";
url31 : string = "https://www.facebook.com/paparraziitalia/";
url32 : string = "https://www.facebook.com/scoop.erbil/?ref=br_rs";
url33 : string = "https://www.facebook.com/%D9%85%D8%B7%D8%B9%D9%85-%D8%A7%D9%84%D9%87%D9%8A%D8%A8%D8%A9-%D8%A7%D8%B1%D8%A8%D9%8A%D9%84-Alheybah-resturant-erbil-1951641871717816/";
url34 : string = "https://www.facebook.com/shishandshawarma/";
url35 : string = "https://www.facebook.com/BtoBkurdstan/";
url36 : string = "https://www.facebook.com/HARDEESKURDISTAN/";
url37 : string = "https://www.facebook.com/KFCKURDISTAN/";
url38 : string = "https://www.facebook.com/PapaJohnsErbil/";
url39 : string = "https://www.facebook.com/Shawarmachi/";
url40 : string = "https://www.facebook.com/manaqish/";
url41 : string = "https://www.facebook.com/abdullahabdulbasit859/";
url42 : string = "https://www.facebook.com/papatya.fresh/";
url43 : string = "https://www.facebook.com/ShawarmaCornerErbil/";
url44 : string = "https://www.facebook.com/Awafi-1681546148748140/";

url45 : string ="https://www.facebook.com/PIZZA-HOME-576232872448330/";
url46 : string ="https://www.facebook.com/Erbillabarbecue/";
url47 : string = "https://www.facebook.com/Grace-House-776136539138030/";
url48 : string = "https://www.facebook.com/CelloErbil/";
url49 : string = "https://www.facebook.com/gourmetdamas/";
url50 : string = "https://www.facebook.com/alsafadirestauranterbil/";
url51 : string = "https://www.facebook.com/pizzahutkurdistanregion/";
url52 : string = "https://www.facebook.com/Taybat.alsham.restaurant%20/";
url53 : string = "https://www.facebook.com/%D9%85%D8%B7%D8%B9%D9%85-%D8%A7%D9%86%D8%B3-%D8%A7%D8%B1%D8%A8%D9%8A%D9%84-1662903027079375/?hc_ref=ARTyh2g4x5eGVY71dm_iNNisfAZXjNv8ZyhXD5QxkQ0bQnvWSdPGwAY5uLxAgEjacpc";
url54 : string = "https://www.facebook.com/onyxerbil/";
url55 : string = "https://www.facebook.com/shakespeareandcoerbil/";
url56 : string = "https://www.facebook.com/DcSteakhouse/?rf=155098027963526";
url57 : string = "https://www.facebook.com/Naranj.Erbil/";
url58 : string = "https://www.facebook.com/India-Gate-Restaurant-1386388411619057/";
url59 : string = "https://www.facebook.com/shaichezh/";
url60 : string = "https://www.facebook.com/wingerserbil/"
url61 : string = "https://www.facebook.com/shkarfish/photos/pcb.595832430614664/595832047281369/?type=3";


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private inappbrowser: InAppBrowser,
              public alertCtrl: AlertController,
              public addserviceplaceProvider: AddserviceplaceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResturanterbilPage');
  }


  openfacebook(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url, '_self', options)
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






addNewPlace(locations:Locations){
 this.addserviceplaceProvider.addLocationErbilRest(locations).then(ref => {
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
