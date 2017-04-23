import { Component, ViewChild } from '@angular/core';
import { ClientService } from '../client.service';
import { IClient } from '../../models/client'
@Component({
	selector: 'client-profile',
	templateUrl: './client-profile.html',
	styleUrls: ['./client-profile.scss']
})
export class ClientProfileComponent{
    
	client : IClient;

	constructor(private _clientService : ClientService){
		this.client = this._clientService.getClient();
	}

	

}