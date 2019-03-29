import { ContactService } from './../../services/contact.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NuevoContactoPage } from '../nuevo-contacto/nuevo-contacto';
import { Contact } from '../../models/contact.model';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';

/**
 * Generated class for the LibretaContactosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-libreta-contactos',
  templateUrl: 'libreta-contactos.html',
})
export class LibretaContactosPage {

  contacts: Contact[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private ContactService: ContactService, public dbFirebase:FirebaseDbProvider) {
  }
  
  ionViewDidEnter(){
    this.dbFirebase.getContacto().subscribe(listaContactos=>{this.contacts=listaContactos;});
  }

  addContact(){
    this.navCtrl.push(NuevoContactoPage);
  }
    

}
