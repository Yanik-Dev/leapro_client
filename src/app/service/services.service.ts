import { Injectable } from '@angular/core'
import { HttpClient } from '../shared_module/http-client.service';
import { IService } from '../models/service'
import { Observable } from 'rxjs/Observable'
import  * as Backend from '../route/backend.route';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class ServicesService{

    constructor(private _httpClient: HttpClient){}

    get() : Observable<any>{
      return this._httpClient.get(Backend.ROUTES.SERVICE.get)
                  .map(res => res.json())
                  .catch(err => err.json());
    }

        /**
     * inserts a product model into the database
     * @param model 
     * @return Observable
     */
    insert(model: IService) :any{
       return this._httpClient.post(Backend.ROUTES.PRODUCT.insert, model)
                  .map(value=> value.json())
                  .catch((error)=> error.json().error)
    }



    /**
     * updates a product model in the database
     * @param model 
     * @return Observable
     */
    update(model: IService) :any{
        return this._httpClient.post(Backend.ROUTES.SERVICE.update+model.id, model)
                   .map(value=> value.json())
                   .catch((error)=> error.json().error)
    }
    /**
     * query database for search results
     * @param name
     * @param category
     * @return Observable
     */
    search(name : String, category : String): any{
       return this._httpClient.get(Backend.ROUTES.SERVICE.search+"?name="+name+"&category="+category)
                   .map(value=> value.json())
                   .catch((error)=> error.json().error)  
    }

}