import { Component, Input, Output,EventEmitter, SimpleChange } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators} from '@angular/forms';
import { IAddress } from '../models/address';
@Component({
    selector: 'location-form',
    templateUrl: './location-form.html',
    styleUrls: ['./location.scss']
})
export class LocationFormComponent{
    
    public addressForm: FormGroup;
    address: IAddress;
   
    /**
     * used to populate form from Address object passed to it 
     */
    @Input()
    addressToUpdate: IAddress;
    
    /**
     * opens dialog if set to true
     */ 
    @Input()
    opened: boolean = false;
    
    /** 
     * emits Address object
     */
    @Output()
    onAddressAdded = new EventEmitter();   
    
    /**
     * emits boolean false
     */
    @Output()
    onDialogClosed = new EventEmitter();   

    constructor(private _formBuilder: FormBuilder){
        this.addressForm = _formBuilder.group({
            id : [''],
            street : ['',Validators.compose([Validators.required])],
            city : ['', Validators.compose([Validators.required, Validators.minLength(3)])],
            province : ['', Validators.compose([Validators.required, Validators.minLength(3)])],
            zip : ['', Validators.compose([Validators.minLength(3)])],
            type : [''],
            status : [''],
            details : ['', Validators.compose([Validators.minLength(3)])],
            fk_country_id : ['', Validators.compose([Validators.required])],
        });
    }
    
    /**
     * watch for changes from Input decorators
     * @param SimpleChange changes
     */
    ngOnChanges(changes: SimpleChange){
        if(!changes['addressToUpdate'])
            return;
        //TODO: map changes to form controls
        console.log(changes['addressToUpdate'].currentValue);
        this.address = changes['addressToUpdate'].currentValue;
    }

    /**
     * closes Dialog and emits boolean false
     * @param any status logs status of Dialog to console
     */
    public close(status) {
      this.opened = false;
      this.onDialogClosed.emit(this.opened);
    }

    /**
     * save form data
     */
    save(){
        console.log(this.addressForm.value);
        //if saved successfully
        this.onAddressAdded.emit(this.addressForm.value);
        this.addressForm.reset();
    }


    /**
     * resets form
     */
    reset(){
        this.addressForm.reset();
    }
}