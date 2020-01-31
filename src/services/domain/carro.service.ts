import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { CarroDTO } from "../../models/carro.dto";
import { Observable } from "rxjs/Rx";

@Injectable()
export class CarroService {

    constructor(public http: HttpClient){

    }
    findAll() : Observable<CarroDTO[]> {
        return this.http.get<CarroDTO[]>(`${API_CONFIG.baseUrl}/carros`)
    }

}