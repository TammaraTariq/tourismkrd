import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser , InAppBrowserOptions } from '@ionic-native/in-app-browser';

/**
 * Generated class for the DuhokhotelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-duhokhotel',
  templateUrl: 'duhokhotel.html',
})
export class DuhokhotelPage {
url1 : string = "https://www.booking.com/searchresults.en-gb.html?aid=356938;label=metagha-link-localuniversalIQ-hotel-1813698_dev-desktop_los-1_bw-18_dow-Sunday_defdate-1_room-0_lang-en_curr-IQD_gstadt-1_rateid-0_aud-102523374_cid-72;sid=470eea140d00fa85a777dfb9dfac84be;checkin=2018-09-16;checkout=2018-09-17;city=-3104831;highlighted_hotels=1813698;hlrd=with_av;keep_landing=1;redirected=1;source=hotel;sr_show_room=181369801_113624631_1_1_0&utm_campaign=IQ&utm_content=los-1_bw-18_dow-Sunday_lang-en_curr-IQD_gstadt-1_rateid-0_aud-102523374_cid-72&utm_medium=localuniversal&utm_source=metagha&utm_term=hotel-1813698&"
url2 : string = "https://www.booking.com/searchresults.en-gb.html?aid=356938;label=metagha-link-localuniversalIQ-hotel-593606_dev-desktop_los-1_bw-18_dow-Sunday_defdate-1_room-0_lang-en_curr-IQD_gstadt-1_rateid-0_aud-102523374_cid-72;sid=470eea140d00fa85a777dfb9dfac84be;checkin=2018-09-16;checkout=2018-09-17;city=-3104831;highlighted_hotels=593606;hlrd=with_av;keep_landing=1;redirected=1;source=hotel;sr_show_room=59360605_103805715_0_0_0&utm_campaign=IQ&utm_content=los-1_bw-18_dow-Sunday_lang-en_curr-IQD_gstadt-1_rateid-0_aud-102523374_cid-72&utm_medium=localuniversal&utm_source=metagha&utm_term=hotel-593606&"
url3 : string = "https://www.booking.com/searchresults.en-gb.html?aid=356938;label=metagha-link-localuniversalIQ-hotel-384116_dev-desktop_los-1_bw-18_dow-Sunday_defdate-1_room-0_lang-en_curr-IQD_gstadt-1_rateid-0_aud-102523374_cid-72;sid=470eea140d00fa85a777dfb9dfac84be;checkin=2018-09-16;checkout=2018-09-17;city=-3104831;highlighted_hotels=384116;hlrd=with_av;keep_landing=1;redirected=1;source=hotel;sr_show_room=38411607_106931533_0_1_0&utm_campaign=IQ&utm_content=los-1_bw-18_dow-Sunday_lang-en_curr-IQD_gstadt-1_rateid-0_aud-102523374_cid-72&utm_medium=localuniversal&utm_source=metagha&utm_term=hotel-384116&"
url4 : string ="https://www.booking.com/hotel/iq/parwar.en.html?tab=4;rid=4339147021;aid=1213434;label=metagha-link-reviewsIQ-hotel-1080301_dev-desktop_los-1_lang-en;checkin=2018-09-16;checkout=2018-09-17;lang=en;utm_source=metagha;utm_medium=reviews;utm_campaign=IQ;utm_term=hotel-localuniversal;utm_content=los-1_lang-en;advance_booking_window=18"
url5 : string ="https://www.booking.com/hotel/iq/moteljudy.en-gb.html?aid=357026;label=gog235jc-hotel-XX-iq-moteljudy-unspec-iq-com-L%3Aen-O%3AwindowsS7-B%3Achrome-N%3AXX-S%3Abo-U%3AXX-H%3As;sid=470eea140d00fa85a777dfb9dfac84be;dist=0&group_adults=3&keep_landing=1&sb_price_type=total&type=total&"
url6 : string = "https://www.tripadvisor.com/Hotel_Review-g676534-d8261139-Reviews-Rixos_Duhok-Duhok_Duhok_Province.html"
url7 : string = "https://ar.hotelscombined.com/Hotel/Jiyan_Hotel.htm"
url8 : string = "https://www.facebook.com/royalhallalhotel/"
url9 : string = "https://www.facebook.com/%D9%81%D9%86%D8%AF%D9%82-%D9%88%D9%85%D9%88%D8%AA%D9%8A%D9%84-%D8%A7%D9%84%D8%B3%D8%AF%D9%8A%D8%B1-%D8%A8%D8%A7%D9%84%D8%A7%D8%B5-%D8%AF%D9%87%D9%88%D9%83-295581487517958/"
url10 : string ="https://www.facebook.com/DunyaHotel/"
url11 : string ="https://www.facebook.com/Shanel-Hotel-Duhok-656605527753897/"
url12 : string ="https://www.facebook.com/Venice-duhok-hotel-358435471000407/"
url13 : string = "https://www.facebook.com/Hakar.Hotel/"
url14 : string = "https://www.facebook.com/SIHAD-hotel-894650377223571/"
url15 : string = "https://www.facebook.com/Sindbad-Hotel-766405843388923/"
url16 : string = "https://www.facebook.com/noshdar.barashi.7/"
url17 : string ="https://www.facebook.com/raniapalace/"
url18 : string = "https://www.facebook.com/HOJIN-HOTEL-1402295606556100/"
url19 : string = "https://www.facebook.com/Sheraton-Dohuk-Hotel-Staff-878577932196473/"

  constructor(public navCtrl: NavController, public navParams: NavParams,  private inappbrowser: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DuhokhotelPage');
  }
  goToBookRoom1(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url1, '_self', options)
  }
  goToBookRoom2(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url2, '_self', options)
  }
  goToBookRoom3(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url3, '_self', options)
  }
  goToBookRoom4(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url4, '_self', options)
  }
  goToBookRoom5(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url5, '_self', options)
  }
  goToBookRoom6(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url6, '_self', options)
  }
  goToBookRoom7(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url7, '_self',options)
  }
  goToBookRoom8(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url8, '_self',options)
  }
  goToBookRoom9(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url9, '_self',options)
  }
  goToBookRoom10(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url10, '_self',options)
  }
  goToBookRoom11(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url11, '_self',options)
  }
  goToBookRoom12(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url12, '_self',options)
  }
  goToBookRoom13(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url13, '_self',options)
  }
  goToBookRoom14(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url14, '_self',options)
  }
  goToBookRoom15(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url15, '_self',options)
  }
  goToBookRoom16(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url16, '_self',options)
  }
  goToBookRoom17(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url17, '_self',options)
  }
  goToBookRoom18(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url18, '_self',options)
  }
  goToBookRoom19(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url19, '_self',options)
  }
}
