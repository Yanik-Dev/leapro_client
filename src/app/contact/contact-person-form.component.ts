import { Component, Input, Output,EventEmitter, SimpleChange, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators} from '@angular/forms';
import { IContact } from '../models/contact';

@Component({
    selector: "contact-person-form",
    templateUrl: "./contact-person-form.html",
    styleUrls:["./contact.scss"],

})
export class ContactPersonFormComponent{

    @ViewChild('check') check: any;
    public contactForm: FormGroup;
   
    /**
     * used to populate form from Contact object passed to it 
     */
    @Input()
    contactPersonToUpdate: any = {};

    
    /** 
     * emits Contact object
     */
    @Output()
    onContactPersonAdded = new EventEmitter();   
    
    /**
     * emits boolean false
     */
    @Output()
    onDialogClosed = new EventEmitter();   

    constructor(private _formBuilder: FormBuilder){
        
        this.contactForm = _formBuilder.group({
            id : [''],
            isChecked : [],
            contact_name: ['',Validators.compose([Validators.minLength(8)])],
            telephone : ['',Validators.compose([Validators.required, Validators.minLength(8)])],
            mobile : ['', Validators.compose([Validators.required, Validators.minLength(8)])],
            fax : ['', Validators.compose([Validators.required, Validators.minLength(8)])],
            email : ['', Validators.compose([Validators.minLength(3)])],
            gender : ['', Validators.compose([Validators.required])],
            
        });
    }
    
    /**
     * watch for changes from Input decorators
     * @param SimpleChange changes
     */
    ngOnChanges(changes: SimpleChange){
        if(!changes['contactToUpdate'])
            return;
        //TODO: map changes to form controls
        console.log(changes['contactToUpdate'].currentValue);
    }


    /**
     * save form data
     */
    save(){
        console.log(this.contactForm.value);
        //if saved successfully
        this.onContactPersonAdded.emit({value: this.contactForm.value, status: false});
        this.contactForm.reset();
    }


    /**
     * resets form
     */
    reset(){
        this.contactForm.reset();
    }  
}