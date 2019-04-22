import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PatientOptionsPage } from '../patient-options/patient-options';
import { User } from '../../models/user.model';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';

/**
 * Generated class for the SignInPatientPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-in-patient',
  templateUrl: 'sign-in-patient.html',
})

export class SignInPatientPage {

  securityNumber: number;
  date: Date;

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbFirebase: FirebaseDbProvider) {
  }

  goBack(){
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignInPatientPage');
  }
  signInPatient(value) {
    this.dbFirebase.getUsers().subscribe(users=>{
      var i = 0;
      for (i = 0; i < users.length; i++) {
        if (users[i].date == value.date && users[i].securityNumber == value.number) {
          this.securityNumber = value.number;
          this.navCtrl.push(PatientOptionsPage, {'securityNumber':this.securityNumber});
          return 0;
        }
      }
      alert("Usuario no válido");
    });

  }

}
