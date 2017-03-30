import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '../shared_module/http-client.service';
import  * as Backend from '../route/backend.route';
import { IProduct } from '../models/product';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProductService{

    
    constructor(private _httpClient: HttpClient){}
    /**
     * returns all products
     * @return Observable<Product[]>
     */
    get() : any{
       return this._httpClient.get(Backend.ROUTES.PRODUCT.get)
                  .map(value => value.json())
                  .catch((error:any) => error.json().error);
    }

    /**
     * inserts a product model into the database
     * @param model 
     * @return Observable
     */
    insert(model: IProduct) :any{
       return this._httpClient.post(Backend.ROUTES.PRODUCT.insert, model)
                  .map(value=> value.json())
                  .catch((error)=> error.json().error)
    }



    /**
     * updates a product model in the database
     * @param model 
     * @return Observable
     */
    update(model: IProduct) :any{
        return this._httpClient.post(Backend.ROUTES.PRODUCT.update+model.id, model)
                   .map(value=> value.json())
                   .catch((error)=> error.json().error)
    }
    
}
