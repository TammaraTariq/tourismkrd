import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ErbilPage } from '../pages/erbil/erbil';
import { ResturanterbilPage } from '../pages/resturanterbil/resturanterbil';
import { ErbilhotelPage } from '../pages/erbilhotel/erbilhotel'
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ErbilresortsPage } from '../pages/erbilresorts/erbilresorts';
import { ThinktodoinerbilPage } from '../pages/thinktodoinerbil/thinktodoinerbil';
import { DuhokPage } from '../pages/duhok/duhok';
import { DuhokrestaurantPage } from '../pages/duhokrestaurant/duhokrestaurant';
import { DuhokhotelPage } from '../pages/duhokhotel/duhokhotel';
import { DuhokresortsPage } from '../pages/duhokresorts/duhokresorts';
import { ThinltodoinduhokPage } from '../pages/thinltodoinduhok/thinltodoinduhok';
import { SulaimaniyahPage } from '../pages/sulaimaniyah/sulaimaniyah';
import { SulaimaniyahresturantPage } from '../pages/sulaimaniyahresturant/sulaimaniyahresturant';
import { SulaimaniyahhotelPage } from '../pages/sulaimaniyahhotel/sulaimaniyahhotel';
import { SulaimaniyahresortsPage } from '../pages/sulaimaniyahresorts/sulaimaniyahresorts';
import { ThingtodoinsulimaniayPage } from '../pages/thingtodoinsulimaniay/thingtodoinsulimaniay';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ErbilPage,
    ResturanterbilPage,
    ErbilhotelPage,
    ErbilresortsPage,
    ThinktodoinerbilPage,
    DuhokPage,
    DuhokrestaurantPage,
    DuhokhotelPage,
    DuhokresortsPage,
    ThinltodoinduhokPage,
    SulaimaniyahPage,
    SulaimaniyahresturantPage,
    SulaimaniyahhotelPage,
    SulaimaniyahresortsPage,
    ThingtodoinsulimaniayPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ErbilPage,
    ResturanterbilPage,
    ErbilhotelPage,
    ErbilresortsPage,
    ThinktodoinerbilPage,
    DuhokPage,
    DuhokrestaurantPage,
    DuhokhotelPage,
    DuhokresortsPage,
    ThinltodoinduhokPage,
    SulaimaniyahPage,
    SulaimaniyahresturantPage,
    SulaimaniyahhotelPage,
    SulaimaniyahresortsPage,
    ThingtodoinsulimaniayPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InAppBrowser,
  ]
})
export class AppModule {}
