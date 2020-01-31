import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarroService } from '../../services/domain/carro.service';
import { CarroDTO } from '../../models/carro.dto';

@IonicPage()
@Component({
  selector: 'page-pecas',
  templateUrl: 'pecas.html',
})
export class PecasPage {

  items: CarroDTO[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public carroService: CarroService) {
  
  }

  ionViewDidLoad() {
    this.carroService.findAll()
    .subscribe(response => {
      this.items = response;
    },
    error =>{
      console.log(error);
    }) 
  }
}
