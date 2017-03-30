import { Injectable } from '@angular/core';
import { HttpClient } from '../shared_module/http-client.service';
import { Http } from '@angular/http';
import { Unit } from '../models/unit';
@Injectable()
export class UnitService{

    constructor(private _httpClient: HttpClient, private _http: Http){

    }


    get(){
      return this._http.get("http://localhost:4200/app/unit/data.json");
    }


}