import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LibretaContactosPage } from './libreta-contactos';

@NgModule({
  declarations: [
    LibretaContactosPage,
  ],
  imports: [
    IonicPageModule.forChild(LibretaContactosPage),
  ],
})
export class LibretaContactosPageModule {}
