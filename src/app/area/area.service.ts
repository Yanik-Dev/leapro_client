import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class AreaService{
    constructor(private _http: Http){}

    get(){
        return this._http.get('http://localhost:4200/app/area/data.json');
    }
}