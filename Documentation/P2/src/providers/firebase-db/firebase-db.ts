/*import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the FirebaseDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
@Injectable()
export class FirebaseDbProvider {

  constructor(public http: HttpClient) {
    console.log('Hello FirebaseDbProvider Provider');
  }

}*/
//import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase} from 'angularfire2/database';
import { Appointment } from '../../models/appointment.model';
import { User } from '../../models/user.model';
import { Doctor } from '../../models/doctor.model';
import { Injectable } from '@angular/core';

@Injectable()
export class FirebaseDbProvider {

  constructor(public afDB:AngularFireDatabase) {
  console.log('Hello FirebaseDbProvider Provider');

  }


  addFinishedAppointment(appointment:Appointment) {
   return this.afDB.database.ref('finishedAppointments/'+appointment.date + appointment.time).set(appointment);
  }
  deleteFinishedAppointment(appointment:Appointment) {
   this.afDB.database.ref('finishedAppointments/'+appointment.date+appointment.time).remove();
  }
  private finishedAppointmentsRef=this.afDB.list<Appointment>('finishedAppointments');
  getFinishedAppointments(){
   return this.finishedAppointmentsRef.valueChanges();
  }


  addRemainingAppointment(appointment:Appointment) {
   return this.afDB.database.ref('remainingAppointments/'+appointment.date + appointment.time).set(appointment);
  }
  deleteRemainingAppointment(appointment:Appointment) {
   this.afDB.database.ref('remainingAppointments/'+appointment.date+appointment.time).remove();
  }
  private remainingAppointmentsRef=this.afDB.list<Appointment>('remainingAppointments');
  getRemainingAppointments(){
   return this.remainingAppointmentsRef.valueChanges();
  }

  private usersRef=this.afDB.list<User>('users');
  getUsers(){
   return this.usersRef.valueChanges();
  }
  private doctorsRef=this.afDB.list<Doctor>('doctors');
  getDoctors(){
   return this.doctorsRef.valueChanges();
  }
}
