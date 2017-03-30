import { Component, Input, Output,EventEmitter, SimpleChange } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators} from '@angular/forms';
import { Address } from '../models/address';
@Component({
    selector: 'location-form',
    templateUrl: './location-form.html',
    styleUrls: ['./location.scss']
})
export class LocationFormComponent{
    
    addressForm: FormGroup;
    address: Address;
   
    /**
     * used to populate form from Address object passed to it 
     */
    @Input()
    addressToUpdate: Address = new Address();
    
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
        this.address = new Address();
        this.addressForm = _formBuilder.group({
            id : [''],
            street : ['',Validators.compose([Validators.required])],
            city : ['', Validators.compose([Validators.required, Validators.minLength(3)])],
            province : ['', Validators.compose([Validators.required, Validators.minLength(3)])],
            zip : ['', Validators.compose([Validators.minLength(3)])],
            type : [''],
            status : [''],
            details : ['', Validators.compose([Validators.minLength(3)])],
            country : this._formBuilder.group({
                id : ['', Validators.compose([Validators.required])],
                country : []
            })
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