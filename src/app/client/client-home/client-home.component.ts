import { Component, ViewChild } from '@angular/core';
@Component({
    selector: 'client-home',
    templateUrl: './client-home.html',
    styleUrls: ['../client.scss']
})
export class ClientHomeComponent{
    openWizard : boolean = false;

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

    /**
     * store company's info form wizard on function call
     */
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

    /**
     * Saves data passed from wizard to database
     */
    saveWizardData(){
        //Todo: save data
    }
}