import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaPecasPage } from './lista-pecas';
import { HttpClientModule } from '@angular/common/http';


import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  declarations: [
    ListaPecasPage,
  ],
  imports: [
    HttpClientModule,
    NgxDatatableModule,
    IonicPageModule.forChild(ListaPecasPage),
  ],
})
export class ListaPecasPageModule {}
