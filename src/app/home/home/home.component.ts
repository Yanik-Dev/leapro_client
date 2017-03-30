import { Component } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: 'home.html',
    styleUrls: ['../home.scss']
})
export class HomeComponent {
    addressListDialogOpened: boolean = false;
    contactFormDialogOpened: boolean = false;
    open: boolean = true;
    
opened : boolean = false;
opened2 : boolean = false;
    /**
     * catches emitted value and closes dialog
     */
    addressSelected(event: any) {
        console.log(event.value);
        this.addressListDialogOpened = event.status;
    }

    /**
     * catches emitted value and closes dialog
     */
    locationListDialogClosed(event: any) {
        this.addressListDialogOpened = event;
    }

   

    /**
     * catches emitted value and closes dialog
     */
    contactFormDialogClosed(event: any) {
        this.contactFormDialogOpened = event;
    }


    /**
     * catches emitted value and closes dialog
     * @param any event
     */
    contactAdded(event: any) {
        console.log(event.value);
        this.contactFormDialogOpened = event.status;
    }

   
}