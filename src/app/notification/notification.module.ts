import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NotificationComponent } from "./notification.component";

import { ClarityModule } from 'clarity-angular';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        ClarityModule
    ],
    exports: [NotificationComponent],
    declarations: [NotificationComponent],
    providers: []
})
export class NotificationModule{}