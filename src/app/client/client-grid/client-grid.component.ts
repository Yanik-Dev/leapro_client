import { Component } from '@angular/core';
import {State} from "clarity-angular";
import { ClientService } from "../client.service";
import {IClient} from "../../models/client"
import {StringFilter} from "clarity-angular";

/**
 * DataGrid filters
 */
class ClientIdFilter implements StringFilter<IClient> {
    accepts(client: IClient, search: string):boolean {
        return "" + client.id == search;
    }
}

class ClientNameFilter implements StringFilter<IClient> {
    accepts(client: IClient, search: string):boolean {
        return client.name.toLowerCase().indexOf(search) >= 0;
    }
}

class ClientDetailsFilter implements StringFilter<IClient> {
    accepts(client: IClient, search: string):boolean {
        return client.details.toLowerCase().indexOf(search) >= 0;
    }
}

class ClientTypeFilter implements StringFilter<IClient> {
    accepts(client: IClient, search: string):boolean {
        return client.flag.toLowerCase().indexOf(search) >= 0;
    }
}

@Component({
    selector: 'client-grid',
    templateUrl: './client-grid.html',
    styleUrls: ['../client.scss']
})
export class ClientGridComponent{
    private clientIdFilter = new ClientIdFilter();
    private clientNameFilter = new ClientNameFilter();
    private clientDetailsFilter = new ClientDetailsFilter();
    private clientTypeFilter = new ClientTypeFilter();
    clients: any= [];
    recentClients :any = []
    total: number;
    loading: boolean = true;
    constructor(private _clientService : ClientService){}

    ngOnInit(){
        this._clientService.get().subscribe(
            (res) => {
               if(res.code != 200){
                   //display errors
                   return;
               }
               for(let i = 0; i < res.data.length; i++){
                    this.clients.push(res.data[i]);
                }
                this.loading = false;
            }
        )
    }
    search(q : any){
        this.clients = []
        this._clientService.search(q).subscribe(
            (res) => {
               if(res.code != 200){
                   //display errors
                   return;
               }
               for(let i = 0; i < res.data.length; i++){
                    this.clients.push(res.data[i]);
                }
                this.loading = false;
            }
        )
    }


}