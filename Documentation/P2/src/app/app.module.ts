import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AppointmentPage } from '../pages/appointment/appointment';
import { DoctorPage } from '../pages/doctor/doctor';
import { PatientOptionsPage } from '../pages/patient-options/patient-options';
import { TimeTablePage } from '../pages/time-table/time-table';
import { SignInPatientPage } from '../pages/sign-in-patient/sign-in-patient';
import { SignInDoctorPage } from '../pages/sign-in-doctor/sign-in-doctor';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FirebaseDbProvider } from '../providers/firebase-db/firebase-db';
import { LocalNotifications } from '@ionic-native/local-notifications';


export const fireBaseConfig={
  apiKey: "AIzaSyDN7hcv1WbUqxI5I31NrQ7UDfo7OsDIKbU",
  authDomain: "medicitas-152e3.firebaseapp.com",
  databaseURL: "https://medicitas-152e3.firebaseio.com",
  projectId: "medicitas-152e3",
  storageBucket: "medicitas-152e3.appspot.com",
  messagingSenderId: "16303439601"
}
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AppointmentPage,
    DoctorPage,
    PatientOptionsPage,
    TimeTablePage,
    SignInPatientPage,
    SignInDoctorPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(fireBaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AppointmentPage,
    DoctorPage,
    PatientOptionsPage,
    TimeTablePage,
    SignInPatientPage,
    SignInDoctorPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LocalNotifications,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseDbProvider,

  ]
})
export class AppModule {}
