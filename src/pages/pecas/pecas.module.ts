import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PecasPage } from './pecas';
import { IonicSelectableModule } from 'ionic-selectable';
import { IonicModule } from 'ionic-angular';

@NgModule({
  declarations: [
    PecasPage,
  ],
  imports: [
    IonicPageModule.forChild(PecasPage),
    IonicSelectableModule,
    IonicModule
  ],
})
export class PecasPageModule {}
