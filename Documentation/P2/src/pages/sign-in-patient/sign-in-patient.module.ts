import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignInPatientPage } from './sign-in-patient';

@NgModule({
  declarations: [
    SignInPatientPage,
  ],
  imports: [
    IonicPageModule.forChild(SignInPatientPage),
  ],
})
export class SignInPatientPageModule {}
