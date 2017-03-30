import { Component, Output} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Company } from '../../models/company';
@Component({
    selector: "company-form",
    templateUrl: "./company-form.html",
    styleUrls:["../company.scss"],

})
export class CompanyFormComponent{
    companyForm: FormGroup;
    company: Company;

    constructor(private _formBuilder: FormBuilder){
        this.companyForm = this._formBuilder.group({
               'id': [0,],
             'name': ['', Validators.compose([Validators.required])],
            'establishedDate': ['',]
        })
    }

}