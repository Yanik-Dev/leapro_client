import { Injectable } from '@angular/core'
import { HttpClient } from '../shared_module/http-client.service';
import { IService } from '../models/service'
import { Observable } from 'rxjs/Observable'
import  * as Backend from '../route/backend.route';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class ServicesService{

    constructor(private _http: HttpClient){}

    get() : Observable<any>{
      return this._http.get(Backend.ROUTES.SERVICE.get)
                  .map(res => res.json())
                  .catch(err => err.json());
    }


}