import { Component,Input, Output, EventEmitter, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Unit } from '../models/unit';

@Component({
    selector: 'unit-form',
    templateUrl: 'unit-form.html',
})
export class UnitFormComponent{
    unitForm : FormGroup;

    /**
     * populate form fields
     */
    @Input() unit : Unit;

    /**
     * Constructs reactive form
     */
    constructor(private _formBuilder: FormBuilder){
        this.unitForm = this._formBuilder.group({
            id : [],
            name: ['',],
            code: [''],
            description: ['',],
            
        })
    }
   
   /**
    * watches the input variable "unit" and update form fields 
    * when unit values change
    * @param SimpleChange change array of all the Input variables
    */
   ngOnChanges(change : SimpleChange){
        let value = <Unit> change['unit'].currentValue;
        if(value){
            this.unitForm.patchValue(
                {
                   id : value.id,
                   name : value.name,
                   code : value.code,
                   description: value.description,             
                }
            )
        }
    }

    /**
     * resets form fields
     */
    reset(){
        this.unitForm.reset();
    }
}