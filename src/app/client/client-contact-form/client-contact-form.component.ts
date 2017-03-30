import { Component, Input, Output, EventEmitter, SimpleChange } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Contact } from '../models/contact';

@Component({
    selector: 'client-contact-form',
    templateUrl: './client-contact-form.html',
    styleUrls: ['./client.scss']
})
export class ClientContactFormComponent{
     contact: Contact;
     contactForm: FormGroup;
   
    /**
     * used to populate form from Contact object passed to it 
     */
    @Input()
    contactToUpdate: Contact = new Contact();
    
    /**
     * opens dialog if set to true
     */ 
    @Input()
    opened: boolean = false;
    
    /** 
     * emits Contact object
     */
    @Output()
    onContactAdded = new EventEmitter();   
    
    /**
     * emits boolean false
     */
    @Output()
    onDialogClosed = new EventEmitter();   

    constructor(private _formBuilder: FormBuilder){
        this.contact = new Contact();
        this.contactForm = _formBuilder.group({
            id : [''],
            telephone : ['',Validators.compose([Validators.required, Validators.minLength(8)])],
            mobile : ['', Validators.compose([Validators.required, Validators.minLength(8)])],
            fax : ['', Validators.compose([Validators.required, Validators.minLength(8)])],
            email : ['', Validators.compose([Validators.minLength(3)])],
            
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
        this.contact = changes['contactToUpdate'].currentValue;
    }

}