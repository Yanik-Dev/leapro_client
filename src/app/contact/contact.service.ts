import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

@Injectable()
export class ContactService{
    constructor(private _http: Http){}
}