import { Injectable } from '@angular/core';
import { HttpClient } from '../shared_module/http-client.service';
import { Http } from '@angular/http';
import { Category } from '../models/Category';
import * as backend from '../route/backend.route';
@Injectable()
export class CategoryService{

    constructor(private _httpClient: HttpClient, private _http: Http){

    }


    get(){
      return this._http.get(backend.ROUTES.CATEGORY.get).map(
        res => res.json()
      );
    }

    /**
     * inserts a Category model into the database
     * @param Category 
     */
    insert(Category:Category){
      return this._httpClient.post(backend.ROUTES.CATEGORY.insert, Category).map(
        res => res.json()
      )
    }

    /**
     * updates an already existing Category model on the database
     * @param Category 
     */
    update(Category:Category){
      return this._httpClient.post(backend.ROUTES.CATEGORY.update+Category.category_id, Category).map(
        res => res.json()
      )
    }

}