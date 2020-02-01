import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../../config/api.config";
import { PecaDTO } from "../../models/peca.dto";
import { Observable } from "rxjs/Rx";

@Injectable()
export class PecaService {

    constructor(public http: HttpClient){

    }
    findAll() : Observable<PecaDTO[]> {
        return this.http.get<PecaDTO[]>(`${API_CONFIG.baseUrl}/pecas`)
    }

    insertOne(obj : PecaDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/pecas`, 
            obj,
            { 
                observe: 'response', 
                responseType: 'text'
            }
        ); 
    }

}