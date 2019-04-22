import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PatientOptionsPage } from './patient-options';

@NgModule({
  declarations: [
    PatientOptionsPage,
  ],
  imports: [
    IonicPageModule.forChild(PatientOptionsPage),
  ],
})
export class PatientOptionsPageModule {}
