import { Component, Input, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { IService } from '../../models/service';
@Component({
	selector: 'service-form',
	templateUrl: './service-form.html',
	styleUrls: ['../service.scss']
})
export class ServiceFormComponent{

    @Input() service : IService;

    serviceForm : FormGroup;

    constructor(private _formBuilder: FormBuilder){
        
        this.serviceForm = this._formBuilder.group({
            id : [],
            name : [],
            fk_category_id : [],
            description : [],
            man_hours : [],
            unit_charge : [],
            discount : [],
            discount_type : [],
            tax : [],
            tax_type : [],
        })
    }


    ngOnChanges(change : SimpleChange){
        let value = <IService> change['service'].currentValue;
        if(value){
            this.serviceForm.patchValue(
                {
                   id : value.id,
                   name : value.name,
                   categoryId : value.fk_category_id,
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
     * resets the form
     */
    reset(){
        this.serviceForm.reset();
    }


}