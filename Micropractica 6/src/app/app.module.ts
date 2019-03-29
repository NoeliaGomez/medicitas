import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {LibretaContactosPage} from '../pages/libreta-contactos/libreta-contactos';
import {AcercaDePage} from '../pages/acerca-de/acerca-de';
import {NuevoContactoPage} from '../pages/nuevo-contacto/nuevo-contacto';

import {ContactService} from '../services/contact.service';
import {Services} from '@angular/core/src/view';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseDbProvider } from '../providers/firebase-db/firebase-db';
import { Observable } from 'rxjs/Observable';


export const fireBaseConfig={
  apiKey: "AIzaSyAk2oesoWNHvQx2aISCc2Fk8503A68x8rQ",
  authDomain: "agenda-de-jimmy.firebaseapp.com",
  databaseURL: "https://agenda-de-jimmy.firebaseio.com",
  projectId: "agenda-de-jimmy",
  storageBucket: "agenda-de-jimmy.appspot.com",
  messagingSenderId: "784923860647"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LibretaContactosPage,
    AcercaDePage,
    NuevoContactoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(fireBaseConfig),AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LibretaContactosPage,
    AcercaDePage,
    NuevoContactoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ContactService,
    FirebaseDbProvider,
    FirebaseDbProvider
  ]
})
export class AppModule {}
