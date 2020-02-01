import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { IonicSelectableModule } from 'ionic-selectable';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CarroService } from '../services/domain/carro.service';

@NgModule({
  declarations: [
    MyApp
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxDatatableModule,
    IonicSelectableModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    CarroService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
