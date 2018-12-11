import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser , InAppBrowserOptions } from '@ionic-native/in-app-browser';

/**
 * Generated class for the SulaimaniyahhotelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sulaimaniyahhotel',
  templateUrl: 'sulaimaniyahhotel.html',
})
export class SulaimaniyahhotelPage {

  url1 : string ="https://www.booking.com/searchresults.en-gb.html?aid=356938;label=metagha-link-localuniversalIQ-hotel-467822_dev-desktop_los-1_bw-10_dow-Friday_defdate-1_room-0_lang-en_curr-IQD_gstadt-2_rateid-0_aud-0_cid-72;sid=470eea140d00fa85a777dfb9dfac84be;checkin=2018-09-28;checkout=2018-09-29;city=-3103288;highlighted_hotels=467822;hlrd=with_av;keep_landing=1;redirected=1;source=hotel&utm_campaign=IQ&utm_content=los-1_bw-10_dow-Friday_lang-en_curr-IQD_gstadt-2_rateid-0_aud-0_cid-72&utm_medium=localuniversal&utm_source=metagha&utm_term=hotel-467822&"
  url2 : string = "https://www.booking.com/searchresults.en-gb.html?aid=356938;label=metagha-link-localuniversalIQ-hotel-593593_dev-desktop_los-1_bw-10_dow-Friday_defdate-1_room-0_lang-en_curr-IQD_gstadt-2_rateid-0_aud-0_cid-72;sid=470eea140d00fa85a777dfb9dfac84be;checkin=2018-09-28;checkout=2018-09-29;city=-3103288;highlighted_hotels=593593;hlrd=with_av;keep_landing=1;redirected=1;source=hotel&utm_campaign=IQ&utm_content=los-1_bw-10_dow-Friday_lang-en_curr-IQD_gstadt-2_rateid-0_aud-0_cid-72&utm_medium=localuniversal&utm_source=metagha&utm_term=hotel-593593&" 
  url3 : string = "https://www.booking.com/searchresults.en-gb.html?aid=356938;label=metagha-link-localuniversalIQ-hotel-1269408_dev-desktop_los-1_bw-10_dow-Friday_defdate-1_room-0_lang-en_curr-IQD_gstadt-2_rateid-0_aud-102523374_cid-72;sid=470eea140d00fa85a777dfb9dfac84be;checkin=2018-09-28;checkout=2018-09-29;city=-3103288;highlighted_hotels=1269408;hlrd=with_av;keep_landing=1;redirected=1;source=hotel&utm_campaign=IQ&utm_content=los-1_bw-10_dow-Friday_lang-en_curr-IQD_gstadt-2_rateid-0_aud-102523374_cid-72&utm_medium=localuniversal&utm_source=metagha&utm_term=hotel-1269408&"
  url4 : string = "https://www.booking.com/searchresults.en-gb.html?aid=356938;label=metagha-link-localuniversalIQ-hotel-2518389_dev-desktop_los-1_bw-10_dow-Friday_defdate-1_room-0_lang-en_curr-IQD_gstadt-2_rateid-0_aud-102523374_cid-72;sid=470eea140d00fa85a777dfb9dfac84be;checkin=2018-09-28;checkout=2018-09-29;city=-3103288;highlighted_hotels=2518389;hlrd=with_av;keep_landing=1;redirected=1;source=hotel&utm_campaign=IQ&utm_content=los-1_bw-10_dow-Friday_lang-en_curr-IQD_gstadt-2_rateid-0_aud-102523374_cid-72&utm_medium=localuniversal&utm_source=metagha&utm_term=hotel-2518389&"
  url5 : string = "https://www.booking.com/searchresults.en-gb.html?aid=356938;label=metagha-link-localuniversalIQ-hotel-3163099_dev-desktop_los-1_bw-10_dow-Friday_defdate-1_room-0_lang-en_curr-IQD_gstadt-2_rateid-0_aud-102523374_cid-72;sid=470eea140d00fa85a777dfb9dfac84be;closed_msg=3163099;dest_id=-3101623;dest_type=city;hlrd=2;redirected=1;source=hotel&"
  url6 : string = "https://www.booking.com/searchresults.en-gb.html?aid=356938;label=metagha-link-localuniversalIQ-hotel-1458152_dev-desktop_los-1_bw-10_dow-Friday_defdate-1_room-0_lang-en_curr-IQD_gstadt-2_rateid-0_aud-102523374_cid-72;sid=470eea140d00fa85a777dfb9dfac84be;checkin=2018-09-28;checkout=2018-09-29;city=-3103288;highlighted_hotels=1458152;hlrd=with_av;keep_landing=1;redirected=1;source=hotel&utm_campaign=IQ&utm_content=los-1_bw-10_dow-Friday_lang-en_curr-IQD_gstadt-2_rateid-0_aud-102523374_cid-72&utm_medium=localuniversal&utm_source=metagha&utm_term=hotel-1458152&"
  url7 :string = "https://www.booking.com/searchresults.en-gb.html?aid=356938;label=metagha-link-localuniversalIQ-hotel-1061660_dev-desktop_los-1_bw-10_dow-Friday_defdate-1_room-0_lang-en_curr-IQD_gstadt-2_rateid-0_aud-102523374_cid-72;sid=470eea140d00fa85a777dfb9dfac84be;checkin=2018-09-28;checkout=2018-09-29;city=-3103288;highlighted_hotels=1061660;hlrd=with_av;keep_landing=1;redirected=1;source=hotel&utm_campaign=IQ&utm_content=los-1_bw-10_dow-Friday_lang-en_curr-IQD_gstadt-2_rateid-0_aud-102523374_cid-72&utm_medium=localuniversal&utm_source=metagha&utm_term=hotel-1061660&"
  url8 : string = "https://www.booking.com/searchresults.en-gb.html?aid=356938;label=metagha-link-localuniversalIQ-hotel-440663_dev-desktop_los-1_bw-10_dow-Friday_defdate-1_room-0_lang-en_curr-IQD_gstadt-2_rateid-0_aud-102523374_cid-72;sid=470eea140d00fa85a777dfb9dfac84be;checkin=2018-09-28;checkout=2018-09-29;city=-3103288;highlighted_hotels=440663;hlrd=with_av;keep_landing=1;redirected=1;source=hotel&utm_campaign=IQ&utm_content=los-1_bw-10_dow-Friday_lang-en_curr-IQD_gstadt-2_rateid-0_aud-102523374_cid-72&utm_medium=localuniversal&utm_source=metagha&utm_term=hotel-440663&"
  url9 : string = "https://www.booking.com/searchresults.en-gb.html?aid=356938;label=metagha-link-localuniversalIQ-hotel-793652_dev-desktop_los-1_bw-10_dow-Friday_defdate-1_room-0_lang-en_curr-IQD_gstadt-2_rateid-0_aud-102523374_cid-72;sid=470eea140d00fa85a777dfb9dfac84be;checkin=2018-09-28;checkout=2018-09-29;city=-3103288;highlighted_hotels=793652;hlrd=with_av;keep_landing=1;redirected=1;source=hotel&utm_campaign=IQ&utm_content=los-1_bw-10_dow-Friday_lang-en_curr-IQD_gstadt-2_rateid-0_aud-102523374_cid-72&utm_medium=localuniversal&utm_source=metagha&utm_term=hotel-793652&"
  url10 : string = "https://www.booking.com/hotel/iq/ramada-sulaymaniyah.en-gb.html?aid=357026;label=gog235jc-hotel-XX-iq-ramadaNsulaymaniyah-unspec-iq-com-L%3Aen-O%3AwindowsS7-B%3Achrome-N%3AXX-S%3Abo-U%3AXX-H%3As;sid=470eea140d00fa85a777dfb9dfac84be;dist=0&group_adults=2&keep_landing=1&sb_price_type=total&type=total&"
  url11 : string = "https://www.booking.com/searchresults.en-gb.html?aid=356938;label=metagha-link-localuniversalIQ-hotel-3181048_dev-desktop_los-1_bw-10_dow-Friday_defdate-1_room-0_lang-en_curr-IQD_gstadt-2_rateid-0_aud-102523374_cid-72;sid=470eea140d00fa85a777dfb9dfac84be;checkin=2018-09-28;checkout=2018-09-29;city=-3103288;highlighted_hotels=3181048;hlrd=with_av;keep_landing=1;redirected=1;source=hotel&utm_campaign=IQ&utm_content=los-1_bw-10_dow-Friday_lang-en_curr-IQD_gstadt-2_rateid-0_aud-102523374_cid-72&utm_medium=localuniversal&utm_source=metagha&utm_term=hotel-3181048&"
  url12 : string = "https://www.booking.com/searchresults.en-gb.html?aid=356938;label=metagha-link-localuniversalIQ-hotel-2511327_dev-desktop_los-1_bw-10_dow-Friday_defdate-1_room-0_lang-en_curr-IQD_gstadt-2_rateid-0_aud-102523374_cid-72;sid=470eea140d00fa85a777dfb9dfac84be;checkin=2018-09-28;checkout=2018-09-29;city=-3103288;highlighted_hotels=2511327;hlrd=with_av;keep_landing=1;redirected=1;source=hotel&utm_campaign=IQ&utm_content=los-1_bw-10_dow-Friday_lang-en_curr-IQD_gstadt-2_rateid-0_aud-102523374_cid-72&utm_medium=localuniversal&utm_source=metagha&utm_term=hotel-2511327&"
  url13 : string = "https://www.tripadvisor.com/Hotel_Review-g659508-d5408926-Reviews-Babylon_Hotel-Sulaymaniyah_Sulaymaniyah_Province.html"




  constructor(public navCtrl: NavController, public navParams: NavParams, private inappbrowser: InAppBrowser) {
  }
efwewee
  ionViewDidLoad() {
    console.log('ionViewDidLoad SulaimaniyahhotelPage');
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
    const browser = this.inappbrowser.create(this.url7, '_self', options)
  }
  goToBookRoom8(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url8, '_self', options)
  }
  goToBookRoom9(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url9, '_self', options)
  }
  goToBookRoom10(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url10, '_self', options)
  }
  goToBookRoom11(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url11, '_self', options)
  }
  goToBookRoom12(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url12, '_self', options)
  }
  goToBookRoom13(){
    
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url13, '_self', options)
  }
}
