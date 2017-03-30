import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from 'clarity-angular';

import { GoogleCalendarComponent } from './google-calendar/google-calendar.component';
import { GoogleMailComponent } from './google-mail/google-mail.component';
import { GoogleApiService } from './google-api.service';
@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, ClarityModule],
    exports: [GoogleMailComponent, GoogleCalendarComponent],
    declarations: [GoogleMailComponent, GoogleCalendarComponent],
    providers: [GoogleApiService]
})
export class GoogleApiModule{}