import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IAddress } from '../models/address';

@Component({
    selector: 'location-details',
    templateUrl: './location-details.html',
    styleUrls: ['./location.scss']
})
export class LocationDetailsComponent{

    /**
     * opens dialog if set to true
     */ 
    @Input()
    opened: boolean = false;

    /**
     * used to populate view from Address object passed to it 
     */
    @Input()
    address : IAddress;

    /**
     * emits boolean false
     */
    @Output()
    onDialogClosed = new EventEmitter();  

    /**
     * closes Dialog and emits boolean false
     * @param any status logs status of Dialog to console
     */
    public close() {
      this.opened = false;
      this.onDialogClosed.emit(this.opened);
    }
}