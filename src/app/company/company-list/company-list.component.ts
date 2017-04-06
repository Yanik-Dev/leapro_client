import { Component, Output} from '@angular/core';
import { ICompany } from '../../models/company';
@Component({
    selector: "company-list",
    templateUrl: "./company-list.html",
    styleUrls:["../company.scss"],

})
export class CompanyListComponent{
    companyList: Array<ICompany>;

    constructor(){
       
    }

}