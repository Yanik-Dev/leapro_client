import { Component, Input, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { IService } from '../../models/service';
@Component({
	selector: 'schedule-form',
	templateUrl: './schedule-form.html',
})
export class ScheduleFormComponent{

    @Input() service : IService;

    serviceForm : FormGroup;

    constructor(private _formBuilder: FormBuilder){
        
        this.serviceForm = this._formBuilder.group({
            id : [],
            name : [],
            categoryId : [],
            description : [],
            manHours : [],
            unitCharge : [],
            discount : [],
            discountType : [],
            tax : [],
            taxType : [],
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
                   manHours : value.man_hours,
                   unitCharge : value.unit_charge,
                   discount : value.discount,              
                   discountType : value.discount_type,               
                   tax : value.tax,               
                   taxType : value.tax_type,               
                }
            )
        }
    }


}