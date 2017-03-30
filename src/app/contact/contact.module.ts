import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ContactPersonFormComponent } from "./contact-person-form.component";
import { ContactService } from "./contact.service";

import { ClarityModule } from 'clarity-angular';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        ClarityModule
    ],
    exports: [ContactPersonFormComponent],
    declarations: [ContactPersonFormComponent],
    providers: [ContactService]
})
export class ContactModule{}