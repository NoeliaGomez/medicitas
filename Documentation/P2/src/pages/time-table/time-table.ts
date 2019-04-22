import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Appointment } from '../../models/appointment.model';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import { DatePipe } from '@angular/common';
import { LocalNotifications } from '@ionic-native/local-notifications';
/**
 * Generated class for the TimeTablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */





@Component({
  selector: 'page-time-table',
  templateUrl: 'time-table.html',
  providers: [DatePipe]
})
export class TimeTablePage {

  finishedAppointments:  Appointment[] = [];
  remainingAppointments:  Appointment[] = [];
  securityNumber: number;
  notificationSent: boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams, public dbFirebase:FirebaseDbProvider, private datePipe: DatePipe, private notifications: LocalNotifications) {
  }
  goBack(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TimeTablePage');
  }

  deleteOldRemainingAppointments(remainingAppointments: Appointment[]){
    var i = 0;
    for (i = 0; i < remainingAppointments.length; i++) {
      if (this.isBeforeToday(remainingAppointments[i].date)) {
        this.dbFirebase.deleteRemainingAppointment(remainingAppointments[i]);
        this.dbFirebase.getRemainingAppointments().subscribe(listaCitas=>{this.remainingAppointments=listaCitas;});
      }
    }
  }
  deleteOldFinishedAppointments(finishedAppointments: Appointment[]){
    var i = 0;
    for (i = 0; i < finishedAppointments.length; i++) {
      if (this.isBeforeToday(finishedAppointments[i].date)) {
        this.dbFirebase.deleteFinishedAppointment(finishedAppointments[i]);
        this.dbFirebase.getFinishedAppointments().subscribe(listaCitas=>{this.finishedAppointments=listaCitas;});
      }
    }
  }

  deleteOldAppointments(){
    this.dbFirebase.getFinishedAppointments().subscribe(listaCitas=>{
      this.finishedAppointments=listaCitas;
      this.deleteOldFinishedAppointments(this.finishedAppointments);
      this.securityNumber = this.navParams.get('securityNumber');
    });
    this.dbFirebase.getRemainingAppointments().subscribe(listaCitas=>{
      this.remainingAppointments=listaCitas;
      this.deleteOldRemainingAppointments(this.remainingAppointments);
      this.securityNumber = this.navParams.get('securityNumber');
      if (this.remainingAppointments.length > 0 && this.isToday(this.remainingAppointments[0].date) && this.remainingAppointments[0].securityNumber == this.securityNumber) {
        console.log(this.remainingAppointments[0].securityNumber + " - " + this.securityNumber);
        this.sendNotification();
      }
    });
  }

  ionViewDidEnter(){
    console.log('ionViewDidEnter TimeTablePage');
    this.deleteOldAppointments();
  }

  isToday(date: Date){
    var now = new Date();
    var today = this.datePipe.transform(now, 'yyyy-MM-dd');
    var dateStr = this.datePipe.transform(date, 'yyyy-MM-dd');
    return today == dateStr;
  }
  isBeforeToday(date: Date){
    var now = new Date();
    var today = this.datePipe.transform(now, 'yyyy-MM-dd');
    var dateStr = this.datePipe.transform(date, 'yyyy-MM-dd');
    return today > dateStr;
  }
  getColor(number) {
    if (number == this.securityNumber) {
      return '#3F7FBF';
    } else{
      return 'black';
    }
  }
  sendNotification() {
    if (!this.notificationSent) {
      this.notifications.schedule( {
        id: 1,
        text: "¡Es tu turno! Puedes entrar a la consulta.",
        led: "white"
      })
      this.notificationSent = true;
    }
  }
}