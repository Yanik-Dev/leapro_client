import { Injectable } from '@angular/core';
import * as Backend from '../route/backend.route';
import { HttpClient } from '../shared_module/http-client.service';
import { Observable } from 'rxjs/Observable'
import { IUser } from '../models/user'

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class LoginService{

    constructor(private _http: HttpClient){}

    authenicate(user : IUser) :Observable<any>{
       return this._http.get(Backend.ROUTES.AUTHENTICATE+'?user_name='+user.username+'&password='+user.password)
                    .map(res=>res.json())
                    .catch(err=>err.json())    
    }
}