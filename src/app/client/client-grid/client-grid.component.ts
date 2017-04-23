import { Component } from '@angular/core';
import {State} from "clarity-angular";
import { ClientService } from "../client.service";
@Component({
    selector: 'client-grid',
    templateUrl: './client-grid.html',
    styleUrls: ['../client.scss']
})
export class ClientGridComponent{

    clients: any= [];
    recentClients :any = []
    total: number;
    loading: boolean = true;
    constructor(private _clientService : ClientService){}

    refresh(state: State) {
       // this.loading = true;
        // convert the filters from an array to a map,
        // because that's what our backend-calling service is expecting
        let filters:{[prop:string]: any} = {};
        
        if (state.filters) {
            for (let filter of state.filters) {
                let {property, value} = <{property: string, value: string}>filter;
                filters[property] = value;
                console.log(filters['undefined'])
                this.search(filters['undefined'])
            }

        }
     
    }

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