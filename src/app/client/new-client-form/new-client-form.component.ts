import { Component, ViewChild } from '@angular/core';
import { INewClient } from '../../models/client'
import { ClientService } from '../client.service'
@Component({
    selector: 'new-client-form',
    templateUrl: './new-client-form.html',
    styleUrls: ['../client.scss']
})
export class NewClientFormComponent{
    
    constructor(private _clientService : ClientService){}

    @ViewChild('client') client : any;
    @ViewChild('location') location : any;
    @ViewChild('company') company : any;
    @ViewChild('contact') contact : any;


    /**
     * Saves data passed from wizard to database
     */
     submit(){        
        this._clientService.insert(this.mapToAPIObject())
            .subscribe(res => {
                console.log(res)
            })
    }

   /**
     * returns object to map api request
     */
    mapToAPIObject() : INewClient{
        let obj : INewClient = {}
        let client = this.client.clientForm.value
        let contactPerson = this.contact.contactForm.value
        //set client information
        obj = client
        if(client.customer_type == "R"){
            let address = this.location.addressForm.value
            obj.street = address.street
            obj.city = address.city
            obj.province = address.province 
            obj.fk_country_id = address.fk_country_id            
        }else{
            console.log(this.company.companyForm.value);
            let company = this.company.companyForm.value
            let branch = this.company.branch.branchForm.value
            let branchLocation = this.company.branch.location.addressForm.value
            obj.company_name= company.company_name
            obj.established_date= company.established_date
            obj.branch_name= branch.branch_name
            obj.type= branch.type
            obj.street= branchLocation.street
            obj.city= branchLocation.city
            obj.province= branchLocation.province
            obj.fk_country_id = branchLocation.fk_country_id
        }
        obj.cp_name = contactPerson.contact_name
        obj.cp_gender = contactPerson.gender
        obj.cp_email = contactPerson.email
        obj.cp_telephone = contactPerson.telephone
        obj.cp_mobile = contactPerson.mobile
        obj.cp_fax = contactPerson.fax
        if(this.contact.contactForm.controls['isChecked'].check == true){
            obj.cp_name = client.first_name +' '+client.last_name
            obj.cp_gender = client.gender
        }
        return obj
    }

   
}