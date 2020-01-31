import { IonicPageModule } from 'ionic-angular/module';
import { NgModule } from '@angular/core';
import { HomePage } from './home';
import { IonicModule } from 'ionic-angular';
import { PecaService } from '../../services/domain/peca.service';
import { CarroService } from '../../services/domain/carro.service';

@NgModule({
    declarations: [HomePage],
    imports: [IonicPageModule.forChild(HomePage),
              IonicModule
             ],
    providers:[
        PecaService,
        CarroService,
      ]
})
export class HomeModule {
}