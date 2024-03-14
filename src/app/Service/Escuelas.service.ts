import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { isObservable, Observable } from 'rxjs';

const URL_ESCUELAS = '../assets/DATA/Escuelas.json';

@Injectable({
    providedIn: 'root'
})

export class EscuelasServicer{

    constructor(private http:HttpClient){}
    GetAll(){
        return this.http.get(URL_ESCUELAS)
    }
}