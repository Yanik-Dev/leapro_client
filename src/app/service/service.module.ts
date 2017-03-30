import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule }      from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';

import { ServiceFormComponent } from './service-form/service-form.component';
import { ServiceTableComponent } from './service-table/service-table.component';
import { ServicesService } from './services.service';

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
    exports: [ServiceFormComponent, ServiceTableComponent],
    declarations:[ServiceFormComponent, ServiceTableComponent],
    providers:[HttpClient, ServicesService]
})
export class ServiceModule{
    
}