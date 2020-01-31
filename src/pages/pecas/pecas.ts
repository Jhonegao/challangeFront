import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarroService } from '../../services/domain/carro.service';
import { CarroDTO } from '../../models/carro.dto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-pecas',
  templateUrl: 'pecas.html',
})
export class PecasPage {

  formGroup: FormGroup;
  items: CarroDTO[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public carroService: CarroService,
              public formBuilder: FormBuilder) {
  
  this.formGroup = this.formBuilder.group({
    nome: ['roda',[Validators.required, Validators.minLength(3),Validators.maxLength(200)]],
    pesoLiquido: ['1.1', [Validators.required]],
    pesoBruto: ['3.9', [Validators.required]],
    carroId: [null, [Validators.required]],
    });
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
  registerPeca(){
    console.log("enviado form")
  }
}
