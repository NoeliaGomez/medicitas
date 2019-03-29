import { Injectable } from '@angular/core';
import { AngularFireDatabase} from 'angularfire2/database';
import {Contact} from '../../models/contact.model';

/*
  Generated class for the FirebaseDbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseDbProvider {
  constructor(public afDB:AngularFireDatabase) {
    console.log('Hello FirebaseDbProvider Provider');
  }
  guardaContacto(contact:Contact){
    if (contact.movil=='') {contact.movil=""+Date.now();}
    return this.afDB.database.ref('contactos/' + contact.nombre).set(contact);
  }
  delContacto(id){
    this.afDB.database.ref('contactos/'+id).remove();
  }
  private contactRef=this.afDB.list<Contact>('contactos');
  getContacto(){
    return this.contactRef.valueChanges();
  }
}
