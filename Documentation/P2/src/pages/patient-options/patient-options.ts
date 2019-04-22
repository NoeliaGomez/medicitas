import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppointmentPage } from '../appointment/appointment';
import { TimeTablePage } from '../time-table/time-table';


@Component({
  selector: 'page-patient-options',
  templateUrl: 'patient-options.html',
})
export class PatientOptionsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToAppointmentPage(){
    this.navCtrl.push(AppointmentPage, {'securityNumber': this.navParams.get('securityNumber')});
  }
  goToTimeTablePage(){
    this.navCtrl.push(TimeTablePage, {'securityNumber': this.navParams.get('securityNumber')});
  }
  goBack(){
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad PatientOptionsPage');
  }
}
