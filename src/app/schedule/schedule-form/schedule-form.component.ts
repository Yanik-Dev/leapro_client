import { Component, Input, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Service } from '../../models/service';
@Component({
	selector: 'schedule-form',
	templateUrl: './schedule-form.html',
})
export class ScheduleFormComponent{

    @Input() service : Service = new Service();

    serviceForm : FormGroup;

    constructor(private _formBuilder: FormBuilder){
        
        this.serviceForm = this._formBuilder.group({
            id : [this.service.id],
            name : [this.service.name],
            categoryId : [this.service.category.id],
            description : [this.service.description],
            manHours : [this.service.manHours],
            unitCharge : [this.service.unitCharge],
            discount : [this.service.discount],
            discountType : [this.service.discountType],
            tax : [this.service.tax],
            taxType : [this.service.taxType],
        })
    }


    ngOnChanges(change : SimpleChange){
        let value = <Service> change['service'].currentValue;
        if(value){
            this.serviceForm.patchValue(
                {
                   id : value.id,
                   name : value.name,
                   categoryId : value.category.id,
                   description: value.description,
                   manHours : value.manHours,
                   unitCharge : value.unitCharge,
                   discount : value.discount,              
                   discountType : value.discountType,               
                   tax : value.tax,               
                   taxType : value.taxType,               
                }
            )
        }
    }


}