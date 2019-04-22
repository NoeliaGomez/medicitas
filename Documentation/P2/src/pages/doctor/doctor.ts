import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Appointment } from '../../models/appointment.model';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import { DatePipe } from '@angular/common';

/**
 * Generated class for the DoctorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-doctor',
  templateUrl: 'doctor.html',
  providers: [DatePipe]
})
export class DoctorPage {

  remainingAppointments:  Appointment[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public dbFirebase: FirebaseDbProvider, private datePipe: DatePipe) {
  }
  goBack(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DoctorPage');
  }
  ionViewDidEnter(){
    this.dbFirebase.getRemainingAppointments().subscribe(listaCitas=>{this.remainingAppointments=listaCitas;this.deleteOldRemainingAppointments(this.remainingAppointments);});
  }
  isToday(date: Date){
    var now = new Date();
    var today = this.datePipe.transform(now, 'yyyy-MM-dd');
    var dateStr = this.datePipe.transform(date, 'yyyy-MM-dd');
    return today == dateStr;
  }
  delayAppointment(){
    if (this.remainingAppointments.length > 1) {
      var appointment1 = this.remainingAppointments[0];
      var appointment2 = this.remainingAppointments[1];
      this.remainingAppointments[0] = appointment2;
      this.remainingAppointments[1] = appointment1;
    }
  }
  deleteAppointment(){
    if (this.remainingAppointments.length > 0) {
      this.dbFirebase.addFinishedAppointment(this.remainingAppointments[0]);
      this.dbFirebase.deleteRemainingAppointment(this.remainingAppointments[0]);
    }
  }
  isBeforeToday(date: Date){
    var now = new Date();
    var today = this.datePipe.transform(now, 'yyyy-MM-dd');
    var dateStr = this.datePipe.transform(date, 'yyyy-MM-dd');
    return today > dateStr;
  }
  deleteOldRemainingAppointments(remainingAppointments: Appointment[]){
    var i = 0;
    for (i = 0; i < remainingAppointments.length; i++) {
      if (this.isBeforeToday(remainingAppointments[i].date)) {
        this.dbFirebase.deleteRemainingAppointment(remainingAppointments[i]);
      }
    }
  }
  deleteOldFinishedAppointments(finishedAppointments: Appointment[]){
    var i = 0;
    for (i = 0; i < finishedAppointments.length; i++) {
      if (this.isBeforeToday(finishedAppointments[i].date)) {
        this.dbFirebase.deleteFinishedAppointment(finishedAppointments[i]);
      }
    }
  }
}
