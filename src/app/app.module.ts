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

import { AngularFireModule } from '@angular/fire';
 import { AngularFireDatabaseModule } from '@angular/fire/database';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {AngularFireAuth} from '@angular/fire/auth'
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

// import { AngularFireDatabase } from '@angular/fire/database';
import { AddserviceplaceProvider } from '../providers/addserviceplace/addserviceplace';
import { SuggestionPage } from '../pages/suggestion/suggestion';


export const firebaseConfig = {
  apiKey: "AIzaSyA_v2fekvJ5b-IFJQtuNPxlWJeW6OIJaLM",
  authDomain: "tourismkrd-f40db.firebaseapp.com",
  databaseURL: "https://tourismkrd-f40db.firebaseio.com",
  projectId: "tourismkrd-f40db",
  storageBucket: "",
  messagingSenderId: "627850458051"
};





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
    ThingtodoinsulimaniayPage,
   LoginPage,
   RegisterPage,
   SuggestionPage,
  
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    
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
    ThingtodoinsulimaniayPage,
    LoginPage,
    RegisterPage,
    SuggestionPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InAppBrowser,
    AngularFireAuthModule,
    AuthServiceProvider,
    AngularFireAuth,
    AddserviceplaceProvider,
  
  ]
})
export class AppModule {}
