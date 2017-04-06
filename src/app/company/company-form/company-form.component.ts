import { Component, Output} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ICompany } from '../../models/company';
@Component({
    selector: "company-form",
    templateUrl: "./company-form.html",
    styleUrls:["../company.scss"],

})
export class CompanyFormComponent{
    companyForm: FormGroup;

    constructor(private _formBuilder: FormBuilder){
        this.companyForm = this._formBuilder.group({
               'id': [0,],
             'company_name': ['', Validators.compose([Validators.required])],
            'established_date': ['',]
        })
    }

}