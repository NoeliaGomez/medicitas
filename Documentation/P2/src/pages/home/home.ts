import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignInDoctorPage } from '../sign-in-doctor/sign-in-doctor';
import { SignInPatientPage } from '../sign-in-patient/sign-in-patient';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  goToSignInPatientPage(){
    this.navCtrl.push(SignInPatientPage);
  }
  goToDoctorPage(){
    this.navCtrl.push(SignInDoctorPage);
  }
}
