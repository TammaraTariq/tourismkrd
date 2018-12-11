import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser , InAppBrowserOptions } from '@ionic-native/in-app-browser';
/**
 * Generated class for the ErbilhotelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-erbilhotel',
  templateUrl: 'erbilhotel.html',
})
export class ErbilhotelPage {
url1 : string = "https://www.booking.com/searchresults.en-gb.html?aid=356938;label=metagha-link-localuniversalIQ-hotel-572255_dev-desktop_los-1_bw-11_dow-Sunday_defdate-1_room-0_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72;sid=470eea140d00fa85a777dfb9dfac84be;checkin=2018-08-12;checkout=2018-08-13;city=-3106433;highlighted_hotels=572255;hlrd=with_av;keep_landing=1;redirected=1;source=hotel&utm_campaign=IQ&utm_content=los-1_bw-11_dow-Sunday_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72&utm_medium=localuniversal&utm_source=metagha&utm_term=hotel-572255&"
url2 : string = "https://www.booking.com/searchresults.en-gb.html?aid=356938;label=metagha-link-localuniversalIQ-hotel-580481_dev-desktop_los-1_bw-11_dow-Sunday_defdate-1_room-0_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72;sid=470eea140d00fa85a777dfb9dfac84be;checkin=2018-08-12;checkout=2018-08-13;city=-3106433;highlighted_hotels=580481;hlrd=with_av;keep_landing=1;redirected=1;source=hotel&utm_campaign=IQ&utm_content=los-1_bw-11_dow-Sunday_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72&utm_medium=localuniversal&utm_source=metagha&utm_term=hotel-580481&"
url3 : string = "https://www.booking.com/searchresults.en-gb.html?aid=356938;label=metagha-link-localuniversalIQ-hotel-1342727_dev-desktop_los-1_bw-11_dow-Sunday_defdate-1_room-0_lang-en_curr-IQD_gstadt-2_rateid-geo_rate_iq_domestic_cid-72;sid=470eea140d00fa85a777dfb9dfac84be;checkin=2018-08-12;checkout=2018-08-13;city=-3106433;highlighted_hotels=1342727;hlrd=with_av;keep_landing=1;redirected=1;source=hotel&utm_campaign=IQ&utm_content=los-1_bw-11_dow-Sunday_lang-en_curr-IQD_gstadt-2_rateid-geo_rate_iq_domestic_cid-72&utm_medium=localuniversal&utm_source=metagha&utm_term=hotel-1342727&";
url4 : string = "https://www.booking.com/searchresults.en-gb.html?aid=356938;label=metagha-link-localuniversalIQ-hotel-384953_dev-desktop_los-1_bw-11_dow-Sunday_defdate-1_room-0_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72;sid=470eea140d00fa85a777dfb9dfac84be;checkin=2018-08-12;checkout=2018-08-13;city=-3106433;highlighted_hotels=384953;hlrd=with_av;keep_landing=1;redirected=1;source=hotel&utm_campaign=IQ&utm_content=los-1_bw-11_dow-Sunday_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72&utm_medium=localuniversal&utm_source=metagha&utm_term=hotel-384953&";
url5 : string = "https://www.booking.com/searchresults.en-gb.html?aid=356938;label=metagha-link-localuniversalIQ-hotel-1097122_dev-desktop_los-1_bw-11_dow-Sunday_defdate-1_room-0_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72;sid=470eea140d00fa85a777dfb9dfac84be;checkin=2018-08-12;checkout=2018-08-13;city=-3106433;highlighted_hotels=1097122;hlrd=with_av;keep_landing=1;redirected=1;source=hotel&utm_campaign=IQ&utm_content=los-1_bw-11_dow-Sunday_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72&utm_medium=localuniversal&utm_source=metagha&utm_term=hotel-1097122&";
url6 : string = "https://www.booking.com/searchresults.en-gb.html?aid=356938;label=metagha-link-localuniversalIQ-hotel-536152_dev-desktop_los-1_bw-11_dow-Sunday_defdate-1_room-0_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72;sid=470eea140d00fa85a777dfb9dfac84be;checkin=2018-08-12;checkout=2018-08-13;city=-3106433;highlighted_hotels=536152;hlrd=with_av;keep_landing=1;redirected=1;source=hotel&utm_campaign=IQ&utm_content=los-1_bw-11_dow-Sunday_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72&utm_medium=localuniversal&utm_source=metagha&utm_term=hotel-536152&"
url7 :string = "https://www.booking.com/searchresults.en-gb.html?aid=356938;label=metagha-link-localuniversalIQ-hotel-492887_dev-desktop_los-1_bw-11_dow-Sunday_defdate-1_room-0_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72;sid=470eea140d00fa85a777dfb9dfac84be;checkin=2018-08-12;checkout=2018-08-13;city=-3106433;highlighted_hotels=492887;hlrd=with_av;keep_landing=1;redirected=1;source=hotel&utm_campaign=IQ&utm_content=los-1_bw-11_dow-Sunday_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72&utm_medium=localuniversal&utm_source=metagha&utm_term=hotel-492887&"
url8 : string = "https://www.booking.com/searchresults.en-gb.html?aid=356938;label=metagha-link-localuniversalIQ-hotel-495110_dev-desktop_los-1_bw-11_dow-Sunday_defdate-1_room-0_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72;sid=470eea140d00fa85a777dfb9dfac84be;checkin=2018-08-12;checkout=2018-08-13;city=-3106433;highlighted_hotels=495110;hlrd=with_av;keep_landing=1;redirected=1;source=hotel&utm_campaign=IQ&utm_content=los-1_bw-11_dow-Sunday_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72&utm_medium=localuniversal&utm_source=metagha&utm_term=hotel-495110&"
url9 : string = "https://www.booking.com/searchresults.en-gb.html?aid=356938;label=metagha-link-localuniversalIQ-hotel-1809717_dev-desktop_los-1_bw-11_dow-Sunday_defdate-1_room-0_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72;sid=470eea140d00fa85a777dfb9dfac84be;closed_msg=1809717;dest_id=-3106433;dest_type=city;hlrd=2;redirected=1;source=hotel&"
url10 : string = "https://www.booking.com/searchresults.en-gb.html?aid=356938;label=metagha-link-localuniversalIQ-hotel-2184221_dev-desktop_los-1_bw-11_dow-Sunday_defdate-1_room-0_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72;sid=470eea140d00fa85a777dfb9dfac84be;checkin=2018-08-12;checkout=2018-08-13;city=-3106433;highlighted_hotels=2184221;hlrd=with_av;keep_landing=1;redirected=1;source=hotel&utm_campaign=IQ&utm_content=los-1_bw-11_dow-Sunday_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72&utm_medium=localuniversal&utm_source=metagha&utm_term=hotel-2184221&"
url11 : string = " https://www.booking.com/searchresults.en-gb.html?aid=356938;label=metagha-link-localuniversalIQ-hotel-371570_dev-desktop_los-1_bw-11_dow-Sunday_defdate-1_room-0_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72;sid=470eea140d00fa85a777dfb9dfac84be;checkin=2018-08-12;checkout=2018-08-13;city=-3106433;highlighted_hotels=371570;hlrd=with_av;keep_landing=1;redirected=1;source=hotel&utm_campaign=IQ&utm_content=los-1_bw-11_dow-Sunday_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72&utm_medium=localuniversal&utm_source=metagha&utm_term=hotel-371570&"
url12 : string = "https://www.booking.com/searchresults.en-gb.html?aid=356938;label=metagha-link-localuniversalIQ-hotel-877928_dev-desktop_los-1_bw-11_dow-Sunday_defdate-1_room-0_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72;sid=470eea140d00fa85a777dfb9dfac84be;checkin=2018-08-12;checkout=2018-08-13;city=-3106433;highlighted_hotels=877928;hlrd=with_av;keep_landing=1;redirected=1;source=hotel&utm_campaign=IQ&utm_content=los-1_bw-11_dow-Sunday_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72&utm_medium=localuniversal&utm_source=metagha&utm_term=hotel-877928&"
url13 : string = "https://www.booking.com/searchresults.en-gb.html?aid=356938;label=metagha-link-localuniversalIQ-hotel-725109_dev-desktop_los-1_bw-11_dow-Sunday_defdate-1_room-0_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72;sid=470eea140d00fa85a777dfb9dfac84be;checkin=2018-08-12;checkout=2018-08-13;city=-3106433;highlighted_hotels=725109;hlrd=with_av;keep_landing=1;redirected=1;source=hotel&utm_campaign=IQ&utm_content=los-1_bw-11_dow-Sunday_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72&utm_medium=localuniversal&utm_source=metagha&utm_term=hotel-725109&"
url14 : string = "https://www.booking.com/searchresults.en-gb.html?aid=356938;label=metagha-link-localuniversalIQ-hotel-715666_dev-desktop_los-1_bw-11_dow-Sunday_defdate-1_room-0_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72;sid=470eea140d00fa85a777dfb9dfac84be;checkin=2018-08-12;checkout=2018-08-13;city=-3106433;highlighted_hotels=715666;hlrd=with_av;keep_landing=1;redirected=1;source=hotel&utm_campaign=IQ&utm_content=los-1_bw-11_dow-Sunday_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72&utm_medium=localuniversal&utm_source=metagha&utm_term=hotel-715666&"
url15 : string = "https://www.booking.com/searchresults.en-gb.html?aid=356938;label=metagha-link-localuniversalIQ-hotel-1014452_dev-desktop_los-1_bw-11_dow-Sunday_defdate-1_room-0_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72;sid=470eea140d00fa85a777dfb9dfac84be;checkin=2018-08-12;checkout=2018-08-13;city=-3106433;highlighted_hotels=1014452;hlrd=with_av;keep_landing=1;redirected=1;source=hotel&utm_campaign=IQ&utm_content=los-1_bw-11_dow-Sunday_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72&utm_medium=localuniversal&utm_source=metagha&utm_term=hotel-1014452&"
url16 : string = "https://www.booking.com/searchresults.en-gb.html?aid=356938;label=metagha-link-localuniversalIQ-hotel-683976_dev-desktop_los-1_bw-18_dow-Wednesday_defdate-1_room-0_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72;sid=470eea140d00fa85a777dfb9dfac84be;checkin=2018-08-22;checkout=2018-08-23;city=-3106433;highlighted_hotels=683976;hlrd=with_av;keep_landing=1;redirected=1;source=hotel&utm_campaign=IQ&utm_content=los-1_bw-18_dow-Wednesday_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72&utm_medium=localuniversal&utm_source=metagha&utm_term=hotel-683976&"
url17 : string = "https://www.booking.com/searchresults.en-gb.html?aid=356938;label=metagha-link-localuniversalIQ-hotel-1146899_dev-desktop_los-1_bw-18_dow-Wednesday_defdate-1_room-0_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72;sid=470eea140d00fa85a777dfb9dfac84be;checkin=2018-08-22;checkout=2018-08-23;city=-3106433;highlighted_hotels=1146899;hlrd=with_av;keep_landing=1;redirected=1;source=hotel&utm_campaign=IQ&utm_content=los-1_bw-18_dow-Wednesday_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72&utm_medium=localuniversal&utm_source=metagha&utm_term=hotel-1146899&"
url18 : string = "https://www.booking.com/searchresults.en-gb.html?aid=356938;label=metagha-link-localuniversalIQ-hotel-2817715_dev-desktop_los-1_bw-18_dow-Wednesday_defdate-1_room-0_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72;sid=470eea140d00fa85a777dfb9dfac84be;checkin=2018-08-22;checkout=2018-08-23;city=-3106433;highlighted_hotels=2817715;hlrd=with_av;keep_landing=1;redirected=1;source=hotel&utm_campaign=IQ&utm_content=los-1_bw-18_dow-Wednesday_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72&utm_medium=localuniversal&utm_source=metagha&utm_term=hotel-2817715&"
url19 : string = "https://www.booking.com/searchresults.en-gb.html?aid=356938;label=metagha-link-localuniversalIQ-hotel-1276436_dev-desktop_los-1_bw-18_dow-Wednesday_defdate-1_room-0_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72;sid=470eea140d00fa85a777dfb9dfac84be;checkin=2018-08-22;checkout=2018-08-23;city=-3106433;highlighted_hotels=1276436;hlrd=with_av;keep_landing=1;redirected=1;source=hotel&utm_campaign=IQ&utm_content=los-1_bw-18_dow-Wednesday_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72&utm_medium=localuniversal&utm_source=metagha&utm_term=hotel-1276436&"
url20 : string = "https://www.booking.com/hotel/iq/erbil-arjaan-by-rotana.en-gb.html?aid=357026;label=gog235jc-hotel-XX-iq-erbilNarjaanNbyNrotana-unspec-iq-com-L%3Aen-O%3AwindowsS7-B%3Achrome-N%3AXX-S%3Abo-U%3AXX-H%3As;sid=470eea140d00fa85a777dfb9dfac84be;dist=0&group_adults=2&sb_price_type=total&type=total&"
url21 : string = "https://www.booking.com/searchresults.en-gb.html?aid=356938;label=metagha-link-localuniversalIQ-hotel-784340_dev-desktop_los-1_bw-18_dow-Wednesday_defdate-1_room-0_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72;sid=470eea140d00fa85a777dfb9dfac84be;checkin=2018-08-22;checkout=2018-08-23;city=-3106433;highlighted_hotels=784340;hlrd=with_av;keep_landing=1;redirected=1;source=hotel&utm_campaign=IQ&utm_content=los-1_bw-18_dow-Wednesday_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72&utm_medium=localuniversal&utm_source=metagha&utm_term=hotel-784340&"
url22 : string = "https://www.booking.com/hotel/iq/asenappar.en-gb.html?aid=357026;label=gog235jc-hotel-XX-iq-asenappar-unspec-iq-com-L%3Aen-O%3AwindowsS7-B%3Achrome-N%3AXX-S%3Abo-U%3AXX-H%3As;sid=470eea140d00fa85a777dfb9dfac84be;dist=0&keep_landing=1&sb_price_type=total&type=total&"
url23 : string = "https://www.booking.com/searchresults.en-gb.html?aid=356938;label=metagha-link-localuniversalIQ-hotel-1179236_dev-desktop_los-1_bw-18_dow-Wednesday_defdate-1_room-0_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72;sid=470eea140d00fa85a777dfb9dfac84be;checkin=2018-08-22;checkout=2018-08-23;city=-3106433;highlighted_hotels=1179236;hlrd=with_av;keep_landing=1;redirected=1;source=hotel&utm_campaign=IQ&utm_content=los-1_bw-18_dow-Wednesday_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72&utm_medium=localuniversal&utm_source=metagha&utm_term=hotel-1179236&"
url24 : string = "https://www.booking.com/searchresults.en-gb.html?aid=356938;label=metagha-link-localuniversalIQ-hotel-2579268_dev-desktop_los-1_bw-18_dow-Wednesday_defdate-1_room-0_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72;sid=470eea140d00fa85a777dfb9dfac84be;checkin=2018-08-22;checkout=2018-08-23;city=-3106433;highlighted_hotels=2579268;hlrd=with_av;keep_landing=1;redirected=1;source=hotel&utm_campaign=IQ&utm_content=los-1_bw-18_dow-Wednesday_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72&utm_medium=localuniversal&utm_source=metagha&utm_term=hotel-2579268&"
url25 : string = "https://www.booking.com/searchresults.en-gb.html?aid=356938;label=metagha-link-localuniversalIQ-hotel-1248165_dev-desktop_los-1_bw-18_dow-Wednesday_defdate-1_room-0_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72;sid=470eea140d00fa85a777dfb9dfac84be;checkin=2018-08-22;checkout=2018-08-23;city=-3106433;highlighted_hotels=1248165;hlrd=with_av;keep_landing=1;redirected=1;source=hotel&utm_campaign=IQ&utm_content=los-1_bw-18_dow-Wednesday_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72&utm_medium=localuniversal&utm_source=metagha&utm_term=hotel-1248165&"
url26 : string = "https://www.booking.com/hotel/iq/logal.en-gb.html?aid=357026;label=gog235jc-hotel-XX-iq-logal-unspec-iq-com-L%3Aen-O%3AwindowsS7-B%3Achrome-N%3AXX-S%3Abo-U%3AXX-H%3As;sid=470eea140d00fa85a777dfb9dfac84be;dist=0&group_adults=2&keep_landing=1&sb_price_type=total&type=total&"
url27 : string = "https://www.booking.com/searchresults.en-gb.html?aid=356938;label=metagha-link-localuniversalIQ-hotel-789134_dev-desktop_los-1_bw-18_dow-Wednesday_defdate-1_room-0_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72;sid=470eea140d00fa85a777dfb9dfac84be;checkin=2018-08-22;checkout=2018-08-23;city=-3106433;highlighted_hotels=789134;hlrd=with_av;keep_landing=1;redirected=1;source=hotel&utm_campaign=IQ&utm_content=los-1_bw-18_dow-Wednesday_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72&utm_medium=localuniversal&utm_source=metagha&utm_term=hotel-789134&"
url28 : string = "https://www.booking.com/searchresults.en-gb.html?aid=356938;label=metagha-link-localuniversalIQ-hotel-1484696_dev-desktop_los-1_bw-18_dow-Wednesday_defdate-1_room-0_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72;sid=470eea140d00fa85a777dfb9dfac84be;checkin=2018-08-22;checkout=2018-08-23;city=-3106433;highlighted_hotels=1484696;hlrd=with_av;keep_landing=1;redirected=1;source=hotel&utm_campaign=IQ&utm_content=los-1_bw-18_dow-Wednesday_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72&utm_medium=localuniversal&utm_source=metagha&utm_term=hotel-1484696&"
url29 : string = "https://www.booking.com/searchresults.en-gb.html?aid=356938;label=metagha-link-localuniversalIQ-hotel-2184287_dev-desktop_los-1_bw-18_dow-Wednesday_defdate-1_room-0_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72;sid=470eea140d00fa85a777dfb9dfac84be;checkin=2018-08-22;checkout=2018-08-23;city=-3106433;highlighted_hotels=2184287;hlrd=with_av;keep_landing=1;redirected=1;source=hotel&utm_campaign=IQ&utm_content=los-1_bw-18_dow-Wednesday_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72&utm_medium=localuniversal&utm_source=metagha&utm_term=hotel-2184287&"
url30 : string = "https://www.booking.com/searchresults.en-gb.html?aid=356938;label=metagha-link-localuniversalIQ-hotel-1298855_dev-desktop_los-1_bw-18_dow-Wednesday_defdate-1_room-0_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72;sid=470eea140d00fa85a777dfb9dfac84be;checkin=2018-08-22;checkout=2018-08-23;city=-3106433;highlighted_hotels=1298855;hlrd=with_av;keep_landing=1;redirected=1;source=hotel&utm_campaign=IQ&utm_content=los-1_bw-18_dow-Wednesday_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72&utm_medium=localuniversal&utm_source=metagha&utm_term=hotel-1298855&"
url31 : string = "https://www.booking.com/searchresults.en-gb.html?aid=356938;label=metagha-link-localuniversalIQ-hotel-434784_dev-desktop_los-1_bw-18_dow-Wednesday_defdate-1_room-0_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72;sid=470eea140d00fa85a777dfb9dfac84be;checkin=2018-08-22;checkout=2018-08-23;city=-3106433;highlighted_hotels=434784;hlrd=with_av;keep_landing=1;redirected=1;source=hotel&utm_campaign=IQ&utm_content=los-1_bw-18_dow-Wednesday_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72&utm_medium=localuniversal&utm_source=metagha&utm_term=hotel-434784&"
url32 : string = "https://www.booking.com/hotel/iq/blue-mercury.en-gb.html?aid=357026;label=gog235jc-hotel-XX-iq-blueNmercury-unspec-iq-com-L%3Aen-O%3AwindowsS7-B%3Achrome-N%3AXX-S%3Abo-U%3AXX-H%3As;sid=470eea140d00fa85a777dfb9dfac84be;dist=0&group_adults=2&sb_price_type=total&type=total&"
url33 : string = "https://www.booking.com/hotel/iq/wlat.en-gb.html?aid=356938;label=metagha-link-localuniversalIQ-hotel-1346834_dev-desktop_los-1_bw-18_dow-Wednesday_defdate-1_room-0_lang-en_curr-IQD_gstadt-3_rateid-0_cid-72;sid=470eea140d00fa85a777dfb9dfac84be;all_sr_blocks=134683403_86112748_0_1_0;checkin=2018-08-22;checkout=2018-08-23;dest_id=-3106433;dest_type=city;dist=0;group_adults=3;group_children=0;hapos=1;highlighted_blocks=134683403_86112748_0_1_0;hpos=1;is_swapped_image=1;req_adults=3;req_children=0;room1=A%2CA%2CA%2C;sb_price_type=total;show_room=134683403_86112748_0_1_0;srepoch=1533409137;srfid=c61e486f7a8670f9105c2bd0d12af0e6de1cc05aX1;srpvid=1a5c8578798102ae;type=total;ucfs=1&"
url34 : string = "https://www.booking.com/hotel/iq/uuo-u-opso-o-uu-ossuo-uuu.en-gb.html?aid=357026;label=gog235jc-hotel-XX-iq-uuoNuNopsoNoNuuNossuoNuuu-unspec-iq-com-L%3Aen-O%3AwindowsS7-B%3Achrome-N%3AXX-S%3Abo-U%3AXX-H%3As;sid=470eea140d00fa85a777dfb9dfac84be;dist=0&group_adults=2&keep_landing=1&sb_price_type=total&type=total&"
url35 : string = "https://www.booking.com/hotel/iq/grand-erbil.en-gb.html?aid=357026;label=gog235jc-hotel-XX-iq-grandNerbil-unspec-iq-com-L%3Aen-O%3AwindowsS7-B%3Achrome-N%3AXX-S%3Abo-U%3AXX-H%3As;sid=470eea140d00fa85a777dfb9dfac84be;dist=0&group_adults=2&sb_price_type=total&type=total&"
url36 : string = "https://www.booking.com/hotel/iq/arabella-grand.en-gb.html?aid=357026;label=gog235jc-hotel-XX-iq-arabellaNgrand-unspec-iq-com-L%3Aen-O%3AwindowsS7-B%3Achrome-N%3AXX-S%3Abo-U%3AXX-H%3As;sid=470eea140d00fa85a777dfb9dfac84be;dist=0&group_adults=2&sb_price_type=total&type=total&"
url37 : string = "https://www.booking.com/hotel/iq/cip-hotels-erbil.en-gb.html?aid=357026;label=gog235jc-hotel-XX-iq-cipNhotelsNerbil-unspec-iq-com-L%3Aen-O%3AwindowsS7-B%3Achrome-N%3AXX-S%3Abo-U%3AXX-H%3As;sid=470eea140d00fa85a777dfb9dfac84be;dist=0&group_adults=2&sb_price_type=total&type=total&"
url38 : string = "https://www.booking.com/hotel/iq/seever.en-gb.html?aid=357026;label=gog235jc-hotel-XX-iq-seever-unspec-iq-com-L%3Aen-O%3AwindowsS7-B%3Achrome-N%3AXX-S%3Abo-U%3AXX-H%3As;sid=470eea140d00fa85a777dfb9dfac84be;dist=0&group_adults=2&sb_price_type=total&type=total&"
url39 : string = "https://www.booking.com/hotel/iq/hayali-suites-furnished-apartments.en-gb.html?aid=357026;label=gog235jc-hotel-XX-iq-hayaliNsuitesNfurnishedNapartments-unspec-iq-com-L%3Aen-O%3AwindowsS7-B%3Achrome-N%3AXX-S%3Abo-U%3AXX-H%3As;sid=470eea140d00fa85a777dfb9dfac84be;dist=0&group_adults=2&sb_price_type=total&type=total&"
url40 : string = "https://www.booking.com/hotel/iq/erbil-oscar.en-gb.html?aid=357026;label=gog235jc-hotel-XX-iq-erbilNoscar-unspec-iq-com-L%3Aen-O%3AwindowsS7-B%3Achrome-N%3AXX-S%3Abo-U%3AXX-H%3As;sid=470eea140d00fa85a777dfb9dfac84be;dist=0&sb_price_type=total&type=total&"
url41 : string = "https://www.tripadvisor.com/Hotel_Review-g659505-d6210775-Reviews-Al_Jawahiri_Hotel-Erbil_Erbil_Province.html"

url42 : string = "https://www.booking.com/searchresults.en-gb.html?aid=356938;label=metagha-link-localuniversalIQ-hotel-369830_dev-desktop_los-1_bw-17_dow-Wednesday_defdate-0_room-0_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72;sid=470eea140d00fa85a777dfb9dfac84be;checkin=2018-08-22;checkout=2018-08-23;city=-3106433;highlighted_hotels=369830;hlrd=with_av;keep_landing=1;redirected=1;source=hotel&utm_campaign=IQ&utm_content=los-1_bw-17_dow-Wednesday_lang-en_curr-IQD_gstadt-2_rateid-0_cid-72&utm_medium=localuniversal&utm_source=metagha&utm_term=hotel-369830&"





constructor(public navCtrl: NavController, public navParams: NavParams,  private inappbrowser: InAppBrowser) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ErbilhotelPage');
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
  goToBookRoom14(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url14, '_self', options)
  }
  goToBookRoom15(){
    const options: InAppBrowserOptions={
      zoom : 'no',
    toolbar : 'no',
    location : 'no'
    }
    const browser = this.inappbrowser.create(this.url15, '_self', options)
  }
  goToBookRoom16(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url16, '_self', options)
  }
  goToBookRoom17(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url17, '_self', options)
  }
  goToBookRoom18(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url18, '_self', options)
  }
  goToBookRoom19(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url19, '_self', options)
  }
  goToBookRoom20(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url20, '_self', options)
  }
  goToBookRoom21(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url21, '_self', options)
  }
  goToBookRoom22(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url22, '_self', options)
  }
  goToBookRoom23(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url23, '_self', options)
  }
  goToBookRoom24(){
    const options: InAppBrowserOptions={
      zoom : 'no',
    toolbar : 'no',
    location : 'no'
    }
    const browser = this.inappbrowser.create(this.url24, '_self', options)
  }
  goToBookRoom25(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url25, '_self', options)
  }
  goToBookRoom26(){
    const options: InAppBrowserOptions={
      zoom : 'no',
    toolbar : 'no',
    location : 'no'
    }
    const browser = this.inappbrowser.create(this.url26, '_self', options)
  }
  goToBookRoom27(){
    const options: InAppBrowserOptions={
      zoom : 'no',
    toolbar : 'no',
    location : 'no'
    }
    const browser = this.inappbrowser.create(this.url27, '_self', options)
  }
  goToBookRoom28(){
    const options: InAppBrowserOptions={
      zoom : 'no',
    toolbar : 'no',
    location : 'no'
    }
    const browser = this.inappbrowser.create(this.url28, '_self', options)
  }
  goToBookRoom29(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url29, '_self', options)
  }
  goToBookRoom30(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url30, '_self', options)
  }
  goToBookRoom31(){
    const options: InAppBrowserOptions={
      zoom : 'no',
    toolbar : 'no',
    location : 'no'
    }
    const browser = this.inappbrowser.create(this.url31, '_self', options)
  }
  goToBookRoom32(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url32, '_self', options)
  }
  goToBookRoom33(){
    const options: InAppBrowserOptions={
      zoom : 'no',
    toolbar : 'no',
    location : 'no'
    }
    const browser = this.inappbrowser.create(this.url33, '_self', options)
  }
  goToBookRoom34(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url34, '_self', options)
  }
  goToBookRoom35(){
    const options: InAppBrowserOptions={
      zoom : 'no',
    toolbar : 'no',
    location : 'no'
    }
    const browser = this.inappbrowser.create(this.url35, '_self', options)
  }
  goToBookRoom36(){
    const options: InAppBrowserOptions={
      zoom : 'no',
    toolbar : 'no',
    location : 'no'
    }
    const browser = this.inappbrowser.create(this.url36, '_self', options)
  }
  goToBookRoom37(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url37, '_self', options)
  }
  goToBookRoom38(){
    const options: InAppBrowserOptions={
      zoom : 'no',
    toolbar : 'no',
    location : 'no'
    }
    const browser = this.inappbrowser.create(this.url38, '_self', options)
  }
  goToBookRoom39(){
    const options: InAppBrowserOptions={
      zoom : 'no',
    toolbar : 'no',
    location : 'no'
    }
    const browser = this.inappbrowser.create(this.url39, '_self', options)
  }
  goToBookRoom40(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url40, '_self', options)
  }
  goToBookRoom41(){
    const options: InAppBrowserOptions={
      zoom : 'no',
    toolbar : 'no',
    location : 'no'
    }
    const browser = this.inappbrowser.create(this.url41, '_self', options)
  }
  goToBookRoom42(){
    const options: InAppBrowserOptions={
      zoom : 'no',
      toolbar : 'no',
      location : 'no'
    }
    const browser = this.inappbrowser.create(this.url42, '_self', options)
  }
}
