import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class LocationService{

    constructor(private _http: Http){}
}