import { Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient} from '../shared_module/http-client.service';
import  * as Backend from '../route/backend.route';
import { IJob } from '../models/job';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class JobService{


    constructor(private _httpClient: HttpClient){}
    /**
     * returns all jobs
     * @return Observable<Ijob[]>
     */
    get() : any{
       return this._httpClient.get(Backend.ROUTES.JOB.get)
                  .map(value => value.json())
                  .catch(err => 'Server error');
    }
    

    /**
     * inserts a job model into the database
     * @param model 
     * @return Observable
     */
    insert(model: IJob ) :any{
        return this._httpClient.post(Backend.ROUTES.JOB.insert, model)
                   .map(value => value.json())
                   .catch(err => err.json())
    }



    /**
     * updates a job model in the database
     * @param model 
     * @return Observable
     */
    update(model: IJob) :any{
       
    }

    
}