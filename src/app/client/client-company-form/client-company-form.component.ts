import { Component, Output, ViewChild} from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ICompany } from '../../models/company';
@Component({
    selector: "client-company-form",
    templateUrl: "./client-company-form.html",
    styleUrls:["../client.scss"],

})
export class ClientCompanyFormComponent{
    public companyForm: FormGroup;
    company: ICompany;

    @ViewChild('branch') branch : any;
    
    constructor(private _formBuilder: FormBuilder){
        this.companyForm = this._formBuilder.group({
               'id': [0,],
             'company_name': ['', Validators.compose([Validators.required, Validators.minLength(2)])],
            'established_date': ['',]
        })
    }

}