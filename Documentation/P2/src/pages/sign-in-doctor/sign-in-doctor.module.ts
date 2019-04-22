import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SignInDoctorPage } from './sign-in-doctor';

@NgModule({
  declarations: [
    SignInDoctorPage,
  ],
  imports: [
    IonicPageModule.forChild(SignInDoctorPage),
  ],
})
export class SignInDoctorPageModule {}
