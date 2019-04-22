import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import { Appointment } from '../../models/appointment.model';
import { DatePipe } from '@angular/common';

@IonicPage()
@Component({
  selector: 'page-appointment',
  templateUrl: 'appointment.html',
  providers: [DatePipe]
})
export class AppointmentPage {



  constructor(public navCtrl: NavController, public navParams: NavParams, public dbFirebase:FirebaseDbProvider, private datePipe: DatePipe) {
  }

  goBack(){
    this.navCtrl.pop();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AppointmentPage');
  }
  isBeforeToday(date: Date){
    var now = new Date();
    var today = this.datePipe.transform(now, 'yyyy-MM-dd');
    var dateStr = this.datePipe.transform(date, 'yyyy-MM-dd');
    return today > dateStr;
  }
  createAppointment(value: {date:Date, time:string}) {
    var number:number=this.navParams.get('securityNumber');
    let appointment = {
      date: value.date,
      time: value.time,
      securityNumber:number
    }
    if (!this.isBeforeToday(appointment.date)) {
      this.dbFirebase.addRemainingAppointment(appointment);
      document.getElementById("modalBackground1").style.display = "block";
    } else {
      document.getElementById("modalBackground2").style.display = "block";
    }
  }
  exitModal() {
    document.getElementById("modalBackground2").style.display = "none";
  }
}
