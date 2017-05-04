import { Injectable } from '@angular/core';
import { HttpClient } from '../shared_module/http-client.service';
import { Http } from '@angular/http';
import { Unit } from '../models/unit';
import * as backend from '../route/backend.route';
@Injectable()
export class UnitService{

    constructor(private _httpClient: HttpClient, private _http: Http){

    }


    get(){
      return this._http.get(backend.ROUTES.UNIT.get).map(
        res => res.json()
      );
    }

    /**
     * inserts a unit model into the database
     * @param unit 
     */
    insert(unit:Unit){
      return this._httpClient.post(backend.ROUTES.UNIT.insert, unit).map(
        res => res.json()
      )
    }

    /**
     * updates an already existing unit model on the database
     * @param unit 
     */
    update(unit:Unit){
      return this._httpClient.post(backend.ROUTES.UNIT.update+unit.unit_id, unit).map(
        res => res.json()
      )
    }

}