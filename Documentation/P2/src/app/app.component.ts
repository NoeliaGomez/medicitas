import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { AppointmentPage } from '../pages/appointment/appointment';
import { DoctorPage } from '../pages/doctor/doctor';
import { PatientOptionsPage } from '../pages/patient-options/patient-options';
import { TimeTablePage } from '../pages/time-table/time-table';
import { SignInPatientPage } from '../pages/sign-in-patient/sign-in-patient';
import { SignInDoctorPage } from '../pages/sign-in-doctor/sign-in-doctor';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {


    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'AppointmentPage', component: AppointmentPage },
      { title: 'DoctorPage', component: DoctorPage },
      { title: 'PatientOptionsPage', component: PatientOptionsPage },
      { title: 'TimeTablePage', component: TimeTablePage },
      { title: 'SignInPatientPage', component: SignInPatientPage },
      { title: 'SignInDoctorPage', component: SignInDoctorPage },
    ];

  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
