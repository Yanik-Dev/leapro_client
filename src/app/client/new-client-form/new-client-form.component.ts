import { Component, ViewChild } from '@angular/core';
@Component({
    selector: 'new-client-form',
    templateUrl: './new-client-form.html',
    styleUrls: ['../client.scss']
})
export class NewClientFormComponent{
    
    @ViewChild('client') client : any;
    @ViewChild('company') company : any;
    @ViewChild('contact') contact : any;

    /**
     * store client's info form wizard on function call
     */
    clientAdded(){
        console.log(this.client.clientForm);
        if(this.client.location != null)
            console.log(this.client.location.addressForm);
    }

    companyAdded(){
         console.log(this.company.companyForm);
         console.log(this.company.branch.branchForm);
         console.log(this.company.branch.location.addressForm);
    }

    /**
     * store client's contact info form wizard on function call
     */
    contactAdded(){
         console.log(this.contact.contactForm);
    }

   
}