import { Component } from '@angular/core';
import { NavController, IonicPage,} from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CarroDTO } from '../../models/carro.dto';
import { CarroService } from '../../services/domain/carro.service';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';


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
              public carroService: CarroService,
              public alertController: AlertController) {
    this.formGroup = this.formBuilder.group({
      nome: ['',[Validators.required, Validators.minLength(3),Validators.maxLength(200)]],
      },
      error=>{});
    }

    registerCarro(){
      this.carroService.insertOne(this.formGroup.value)
      .subscribe(reponse =>{
        this.showAlert();
      })
    }

async showAlert() {
  const alert = await this.alertController.create({
    title:"Sucesso",
    message:"Cadastro ok",
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

  CadastrarPeca(){
    console.log("swap page")
    this.navCtrl.setRoot('PecasPage')
  }

}
