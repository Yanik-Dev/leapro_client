import { Component,Input, Output, EventEmitter, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Unit } from '../models/unit';
import { UnitService } from './unit.service';

@Component({
    selector: 'unit-form',
    templateUrl: 'unit-form.html',
})
export class UnitFormComponent{
    unitForm : FormGroup;
    error : any = {isTrue: false, message:''} 

    @Input() opened : boolean = false;

    @Output() closed = new EventEmitter();
    @Output() onFormSave = new EventEmitter();
    /**
     * populate form fields
     */
    @Input() unit : Unit;

    /**
     * Constructs reactive form
     */
    constructor(private _formBuilder: FormBuilder, private _unitService : UnitService){
        this.unitForm = this._formBuilder.group({
            unit_id : [],
            unit_name: ['',Validators.compose([Validators.required])],
            code: ['', Validators.compose([Validators.required])],
            description: ['',],
            
        })
    }
   
   /**
    * watches the input variable "unit" and update form fields 
    * when unit values change
    * @param SimpleChange change array of all the Input variables
    */
   ngOnChanges(change : SimpleChange){
        let value = (change['unit'])? <Unit> change['unit'].currentValue: this.unit;
        if(value){
            this.unitForm.patchValue(
                {
                   unit_id : value.unit_id,
                   unit_name : value.unit_name,
                   code : value.code,
                   description: value.description,             
                }
            )
        }
    }


        /**
     * save or update the form information
     */
    save(){
        if(this.unitForm.valid){
           if(this.unitForm.controls.unit_id.value > 0){
                this._unitService.update(this.unitForm.value).subscribe(res=>{
                    if(res.code == 201){
                       this.onFormSave.emit(true);
                        this.error.isTrue = false;
                    }else{
                        this.error = {isTrue: true, message: 'A server error as occur'}
                    }
                });
           }else{
                this._unitService.insert(this.unitForm.value).subscribe(res=>{
                    if(res.code == 201){
                       this.onFormSave.emit(true);
                        this.error.isTrue = false;
                        this.reset();
                    }
                    if(res.code== 409){
                       this.error = {isTrue: true, message: 'Product already exist'}
                    }else{
                        this.error = {isTrue: true, message: 'A server error as occur'}
                    }
                });
           }
        }else{
            this.touchFormFields();
            this.error = {isTrue: true, message: 'Invalid form fields'}
        }
    }
    
    /**
     * activate validations on form fields
     */
    touchFormFields(){
        this.unitForm.controls.unit_name.markAsTouched({onlySelf: false})
        this.unitForm.controls.code.markAsTouched({onlySelf: false})
        this.unitForm.controls.description.markAsTouched({onlySelf: false})
    }

    /**
     * resets form fields
     */
    reset(){
        this.unitForm.reset();
    }

    /**
     * closed modal form
     */
    close(){
        this.reset()
        this.closed.emit(false)
        this.opened = false;
    }
}