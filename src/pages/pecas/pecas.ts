import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarroService } from '../../services/domain/carro.service';


/**
 * Generated class for the PecasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pecas',
  templateUrl: 'pecas.html',
})
export class PecasPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public carroService: CarroService) {
  
  }

  ionViewDidLoad() {
    this.carroService.findAll()
    .subscribe(response => {
      console.log(response);
    },
    error =>{
      console.log(error);
    }) 
     
  }
}
