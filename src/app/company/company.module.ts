import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CompanyFormComponent } from "./company-form/company-form.component";
import { CompanyListComponent } from "./company-list/company-list.component";
import { CompanyService} from "./company.service";

import { ClarityModule } from 'clarity-angular';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        ClarityModule
    ],
    exports: [CompanyFormComponent, CompanyListComponent],
    declarations: [CompanyFormComponent, CompanyListComponent],
    providers: [CompanyService]
})
export class CompanyModule{}