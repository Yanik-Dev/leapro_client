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
     * returns all clients
     * @return Observable<IClient[]>
     */
    recent() : any{
       return this._httpClient.get(Backend.ROUTES.CLIENT.get +'/?limit=5&page=1')
                  .map(value => value.json())
                  .catch(err => 'Server error');
    }
    

    /**
     * search  clients table
     * @return Observable<IClient[]>
     */
    search(name : any) : any{
       return this._httpClient.get(Backend.ROUTES.CLIENT.search+name)
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
     * returns all area for a specific client
     */
    findAllAreas(client : IClient) : any{
        if(client.customer_type == "C"){
            return this._httpClient.get(Backend.ROUTES.CLIENT.commercial.areas+"commercial/clients/companies/branches/"+client.id+"/areas")
                   .map(value => value.json())
                   .catch(err => err.json())
        }else if(client.customer_type == "R"){
            return this._httpClient.get(Backend.ROUTES.CLIENT.resident.areas+"residential/clients/"+client.id+"/areas")
                   .map(value => value.json())
                   .catch(err => err.json())
        }
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

