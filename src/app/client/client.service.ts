import { Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '../shared_module/http-client.service';
import  * as Backend from '../route/backend.route';
import { IClient, INewClient } from '../models/client';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ClientService{
    private _client : IClient = null;

    constructor(private _httpClient: HttpClient){}
    /**
     * returns all clients
     * @return Observable<IClient[]>
     */
    get() : any{
       return this._httpClient.get(Backend.ROUTES.CLIENT.get)
                  .map(value => value.json())
                  .catch(err => 'Server error');
    }
    



    /**
     * inserts a client model into the database
     * @param model 
     * @return Observable
     */
    insert(model: IClient | INewClient) :any{
        return this._httpClient.post(Backend.ROUTES.CLIENT.insert, model)
                   .map(value => value.json())
                   .catch(err => err.json())
    }



    /**
     * updates a client model in the database
     * @param model 
     * @return Observable
     */
    update(model: IClient) :any{
       
    }

    
    /** 
     * get client
     */
     getClient(){ return this._client; }


     /**
      * set client
      */
     setClient(client : IClient){ this._client = client; }


    
}

