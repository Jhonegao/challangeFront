import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PecasPage } from './pecas';
import { IonicSelectableModule } from 'ionic-selectable';
import { IonicModule } from 'ionic-angular';
import { PecaService } from '../../services/domain/peca.service';
import { CarroService } from '../../services/domain/carro.service';

@NgModule({
  declarations: [
    PecasPage,
  ],
  imports: [
    IonicPageModule.forChild(PecasPage),
    IonicSelectableModule,
    IonicModule
  ],
  providers:[
    PecaService,
    CarroService,
  ]

})
export class PecasPageModule {}
