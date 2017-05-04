import { Component, Input, SimpleChange, EventEmitter, Output, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { IService } from '../../models/service';
import { CategoryService } from "app/category/category.service";
import { UnitService } from "app/unit/unit.service";
import { Unit } from "app/models/unit";
import { Category } from "app/models/category";
import { ServicesService } from "app/service/services.service";
@Component({
	selector: 'service-form',
	templateUrl: './service-form.html',
	styleUrls: ['../service.scss']
})
export class ServiceFormComponent implements OnInit{
    private categories : Array<Category>;
    error : any = {isTrue: false, message:''} 
    @Input() service : IService;
    
    @Output() onFormSave = new EventEmitter();
    serviceForm : FormGroup;
    
    
    @Input() opened : boolean = false;

    @Output() closed = new EventEmitter();
    
    constructor(private _formBuilder: FormBuilder,
                private _categoryService : CategoryService,
                private _serviceService : ServicesService
                ){
        
        this.serviceForm = this._formBuilder.group({
            id : [],
            name : [, Validators.compose([Validators.required])],
            fk_category_id : [, Validators.compose([Validators.required])],
            description : [],
            man_hours : [, Validators.compose([Validators.required])],
            unit_charge : [, Validators.compose([Validators.required])],
            discount : [0,],
            discount_type : ["F"],
            tax : [0,],
            tax_type : ["F"],
        })
    }

   ngOnInit(){
        this._categoryService.get().subscribe((data)=>{
           if(data.data.length > 0){
             this.categories = data.data;
           }
       });
    }

        /**
     * save or update the form information
     */
    save(){
        if(this.serviceForm.valid){
           if(this.serviceForm.controls.id.value > 0){
                this._serviceService.update(this.serviceForm.value).subscribe(res=>{
                    if(res.code == 201){
                        this.onFormSave.emit(true);
                        this.error.isTrue = false;
                    }else{
                        this.error = {isTrue: true, message: 'A server error as occur'}
                    }
                });
           }else{
                this._serviceService.insert(this.serviceForm.value).subscribe(res=>{
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
        this.serviceForm.controls.name.markAsTouched({onlySelf: false})
        this.serviceForm.controls.fk_category_id.markAsTouched({onlySelf: false})
        this.serviceForm.controls.description.markAsTouched({onlySelf: false})
        this.serviceForm.controls.unit_cost.markAsTouched({onlySelf: false})
        this.serviceForm.controls.selling_cost.markAsTouched({onlySelf: false})
        this.serviceForm.controls.application.markAsTouched({onlySelf: false})
        this.serviceForm.controls.dilution.markAsTouched({onlySelf: false})
        this.serviceForm.controls.fk_unit_id.markAsTouched({onlySelf: false})
        this.serviceForm.controls.usage_type.markAsTouched({onlySelf: false})
    }

    ngOnChanges(change : SimpleChange){
        let value = (change['service'])? <IService> change['service'].currentValue: this.service;
        if(value){
            this.serviceForm.patchValue(
                {
                   id : value.id,
                   name : value.name,
                   fk_category_id : value.fk_category_id,
                   description: value.description,
                   man_hours : value.man_hours,
                   unit_charge : value.unit_charge,
                   discount : value.discount,              
                   discount_type : value.discount_type,               
                   tax : value.tax,               
                   tax_type : value.tax_type,               
                }
            )
        }
    }


    /**
     * calculates the subtotal for a service
     * @return number 
     */
    calculateSubTotal(){
        return (this.serviceForm.controls['man_hours'].value < 1) ? 
                this.serviceForm.controls['unit_charge'].value
                :this.serviceForm.controls['man_hours'].value * this.serviceForm.controls['unit_charge'].value;

    }


    /**
     * calculates the discounted amount for a service
     * @return number
     */
    calculateDiscountedAmount(){
         return (this.serviceForm.controls['discount_type'].value == "P")?
                 this.calculateSubTotal() * (this.serviceForm.controls['discount'].value/100)
                :(this.serviceForm.controls['discount_type'].value=="F") ? this.serviceForm.controls['discount'].value
                : (this.serviceForm.controls['id'].value > 0) ? this.service.discount: 0;

    }

    /**
     * calculates the taxed amount for a service
     * @return number
     */
    calculateTaxAmount(){
         return (this.serviceForm.controls['tax_type'].value == "P")?
                 this.calculateSubTotal() * (this.serviceForm.controls['tax'].value/100)
                :(this.serviceForm.controls['tax_type'].value=="F") ? this.serviceForm.controls['tax'].value
                : (this.serviceForm.controls['id'].value > 0) ? this.service.tax: 0;

    }

    /**
     * closed modal form
     */
    close(){
        this.reset()
        this.closed.emit(false)
        this.opened = false;
    }

    /**
     * resets the form
     */
    reset(){
        this.serviceForm.reset();
    }


}