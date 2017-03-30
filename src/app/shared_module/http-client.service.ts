import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class HttpClient{

    constructor(private _http: Http){}

    /**
     * Send get request with jwt token
     * @param string url
     * @param any data
     * @return subscriber object
     */
    get(url){
       let headers = new Headers();
       //headers.append('jwt-token', );
        return this._http.get(url, headers);
    }


    /**
     * Send post request with jwt token
     * @param string url
     * @param any data
     * @return subscriber object
     */
    post (url : string, data : any){
        
        console.log(data)
        let headers = new Headers();
    headers.append('Content-Type', 'application/json');
        //header.append('jwt-token', );
        //return this._http.post(url, data, { headers: header});
        return this._http.post(url, data, {headers: headers});
    }
}