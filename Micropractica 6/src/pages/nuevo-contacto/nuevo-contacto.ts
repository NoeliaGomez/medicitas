import { ContactService } from './../../services/contact.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FirebaseDbProvider} from '../../providers/firebase-db/firebase-db';
import { Contact } from '../../models/contact.model';

/**
 * Generated class for the NuevoContactoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-nuevo-contacto',
  templateUrl: 'nuevo-contacto.html',
})
export class NuevoContactoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private ContactService: ContactService, public dbFirebase:FirebaseDbProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NuevoContactoPage');
  }

  onAddContact(value: {nombre:string, organizacion:string, movil:string, correo:string}) {
    console.log(value);
    this.dbFirebase.guardaContacto(value).then(res=>{
      alert(value.nombre+ " guardado en FB");
    });
    this.navCtrl.pop();
  }

}
