import { Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '../shared_module/http-client.service';
import  * as Backend from '../route/backend.route';
import { Client } from '../models/client';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ClientService{

    constructor(private _httpClient: HttpClient){}
    /**
     * returns all products
     * @return Observable<Product[]>
     */
    get() : any{
       return this._httpClient.get(Backend.ROUTES.CLIENT.get)
                  .map(value => value.json())
                  .catch(err => 'Server error');
    }
    



    /**
     * inserts a product model into the database
     * @param model 
     * @return Observable
     */
    insert(model: Client) :any{
     
    }



    /**
     * updates a product model in the database
     * @param model 
     * @return Observable
     */
    update(model: Client) :any{
       
    }

    


    
}

