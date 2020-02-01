import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

export interface Config {
	technologies: string;
}

@Component({
  selector: 'page-lista-pecas',
  templateUrl: 'lista-pecas.html',
})
export class ListaPecasPage {
  public config : Config;
  public columns : any;
  public rows : any;

  constructor(public navCtrl 	: NavController,private _HTTP:HttpClient){
        this.columns = [
        { prop: 'name' },
        { name: 'Summary' },
        { name: 'Company' }
    ];
}

ionViewDidLoad() : void
      {
      this._HTTP
      .get<Config>('/../assets/data/technologies.json')
      .subscribe((data) =>
      {
         this.rows = data.technologies;
      });
   }
}
