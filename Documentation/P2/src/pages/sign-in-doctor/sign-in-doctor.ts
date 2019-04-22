import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DoctorPage } from '../doctor/doctor';
import { Doctor } from '../../models/doctor.model';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';

/**
 * Generated class for the SignInDoctorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in-doctor',
  templateUrl: 'sign-in-doctor.html',
})
export class SignInDoctorPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbFirebase: FirebaseDbProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInDoctorPage');
  }
  goBack(){
    this.navCtrl.pop();
  }
  signInDoctor(value) {
    this.dbFirebase.getDoctors().subscribe(doctors=>{
      var i = 0;
      for (i = 0; i < doctors.length; i++) {
        if (doctors[i].date == value.date && doctors[i].doctorNumber == value.number) {
          this.navCtrl.push(DoctorPage);
          return 0;
        }
      }
      alert("Doctor no válido");
    });

  }

}
