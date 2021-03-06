import { Component, Output, Input, EventEmitter } from '@angular/core';
import { IAddress } from '../models/address';

@Component({
    selector: 'location-list',
    templateUrl: './location-list.html',
    styleUrls: ['./location.scss']
})
export class LocationListComponent{
    addressList : Array<IAddress> = [];   
    addressDialogOpened : boolean = false;
    addressDetailsDialogOpened : boolean = false;
    selectedAddress:IAddress;

    /**
     * opens dialog if set to true
     */
    @Input()
    opened: boolean = true;
    
    /**
     * emits Array of Addtress object || null
     */
    @Output()
    onFinished = new EventEmitter();   
    
    /**
     * emits boolean false
     */
    @Output()
    onDialogClosed = new EventEmitter();   
    
    /**
     * set selected address to be passed to other components
     * @param Address address
     */
    selectAddress(address:IAddress){
      this.selectedAddress = address;
    }

    /**
     * catches emitted object from dialog when
     * a new address is added
     * @param any event emitted value
     */
    addressAdded(event:any){
      console.log(event);
      this.addressList.push(<IAddress>event);
    }
    
    /**
     * closed location-form dialog by catching emitted value
     * @param any event emitted value
     */
    locationFormDialogClosed(event:any){
      this.addressDialogOpened = event;
    }

    /**
     * closed location-form dialog by catching emitted value
     * @param any event emitted value
     */
    detailsFormDialogClosed(event:any){
      this.addressDetailsDialogOpened = event;
    }

     /**
     * closes Dialog and emits boolean false
     * @param any status logs status of Dialog to console
     */
    public close(status, k:any) {
      this.opened = false;
      console.log(k);
      this.onDialogClosed.emit(this.opened);
    }
    
    /**
     * emits array of address object and closed mdialog
     */
    finished(){
      //TODO: emits only checked addresses
      this.opened = false;
      this.onFinished.emit({value: this.addressList, status: this.opened});
    }
}