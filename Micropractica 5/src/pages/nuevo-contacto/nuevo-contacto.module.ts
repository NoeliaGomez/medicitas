import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NuevoContactoPage } from './nuevo-contacto';

@NgModule({
  declarations: [
    NuevoContactoPage,
  ],
  imports: [
    IonicPageModule.forChild(NuevoContactoPage),
  ],
})
export class NuevoContactoPageModule {}
