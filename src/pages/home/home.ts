import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CarroDTO } from '../../models/carro.dto';
import { CarroService } from '../../services/domain/carro.service';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  formGroup: FormGroup;
  carros: CarroDTO[];

  constructor(public navCtrl: NavController,
              public formBuilder: FormBuilder,
              public carroService: CarroService) {
    this.formGroup = this.formBuilder.group({
      nome: ['',[Validators.required, Validators.minLength(3),Validators.maxLength(200)]],
      });
    }

    registerCarro(){
      console.log(this.formGroup.value)
    }

  CadastrarPeca(){
    console.log("swap page")
    this.navCtrl.setRoot('PecasPage')
  }

}
