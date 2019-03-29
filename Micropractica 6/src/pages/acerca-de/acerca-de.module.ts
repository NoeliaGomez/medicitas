import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcercaDePage } from './acerca-de';

@NgModule({
  declarations: [
    AcercaDePage,
  ],
  imports: [
    IonicPageModule.forChild(AcercaDePage),
  ],
})
export class AcercaDePageModule {}
