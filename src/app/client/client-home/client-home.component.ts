import { Component, ViewChild } from '@angular/core';
import { ClientService } from "../client.service";
@Component({
    selector: 'client-home',
    templateUrl: './client-home.html',
    styleUrls: ['../client.scss']
})
export class ClientHomeComponent{
    
    
    recentClients :any = []
    constructor(private _clientService : ClientService){
        this.loadRecentlyAdded()
    }

    loadRecentlyAdded(){
        this.recentClients = []
        this._clientService.recent().subscribe(
            (res) => {
               if(res.code != 200){
                   //display errors
                   return;
               }
               for(let i = 0; i < res.data.length; i++){
                    this.recentClients.push(res.data[i]);
                }
            }
        )
    }
    
}