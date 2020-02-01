import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarroService } from '../../services/domain/carro.service';
import { CarroDTO } from '../../models/carro.dto';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PecaService } from '../../services/domain/peca.service';
import { PecaDTO } from '../../models/peca.dto';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@IonicPage()
@Component({
  selector: 'page-pecas',
  templateUrl: 'pecas.html',
})
export class PecasPage {

  formGroup: FormGroup;
  carros: CarroDTO[];
  pecas: PecaDTO[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder: FormBuilder,
              public carroService: CarroService,
              public pecaSerivce: PecaService,
              public alertController: AlertController) {
  
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
      this.carros = response;
    },
    error =>{
      console.log(error);
    }) 
  }
  registerPeca(){
    this.pecaSerivce.insertOne(this.formGroup.value)
      .subscribe(reponse =>{
        this.showAlert();
      })
  }
  async showAlert() {
    const alert = await this.alertController.create({
      title:"Sucesso",
      message:"Peça Registrada",
      enableBackdropDismiss: false,
      buttons: [
        {
          text:'ok',
          handler: ()=> {
          this.navCtrl.setRoot('PecasPage')
        }
      }
    ]
  });
    await alert.present();
  }
}
