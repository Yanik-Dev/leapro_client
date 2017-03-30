import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule }      from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';

import { ScheduleFormComponent } from './schedule-form/schedule-form.component';

import { HttpClient } from '../shared_module/http-client.service';
@NgModule({
    imports: [
       BrowserModule, 
       RouterModule,
       FormsModule, 
       ReactiveFormsModule,
       HttpModule, 
       JsonpModule, 
       ClarityModule
     ],
    exports: [ScheduleFormComponent],
    declarations:[ScheduleFormComponent],
    providers:[HttpClient]
})
export class ScheduleModule{
    
}