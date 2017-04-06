import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ClarityModule } from 'clarity-angular';

import { CompanyModule } from '../company/company.module';
import { HttpClient } from '../shared_module/http-client.service';
import { ClientHomeComponent } from './client-home/client-home.component';
import { ClientGridComponent } from './client-grid/client-grid.component';
import { ClientFormComponent } from './client-form/client-form.component';
import { ClientProfileComponent } from './client-profile/client-profile.component';
import { NewClientFormComponent } from './new-client-form/new-client-form.component';
import { ClientOutletComponent } from './client-outlet/client-outlet.component';
import { ClientService } from './client.service';
import { ContactModule } from '../contact/contact.module';
import { ClientCompanyFormComponent } from './client-company-form/client-company-form.component';
import { BranchModule } from '../branch/branch.module';
import { LocationModule } from '../location/location.module';
import { JobModule } from '../job/job.module';
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    RouterModule,
    CompanyModule,
    LocationModule,
    ClarityModule,
    BranchModule,
    ContactModule,
    JobModule
  ],
  exports: [ 
             ClientGridComponent,
             ClientFormComponent, 
             ClientHomeComponent, 
             ClientCompanyFormComponent, 
             ClientProfileComponent,
             NewClientFormComponent,
             ClientOutletComponent,
            ],
  declarations: [
                  ClientOutletComponent,
                  ClientGridComponent, 
                  ClientFormComponent,
                  ClientHomeComponent, 
                  ClientCompanyFormComponent,
                  ClientProfileComponent,
                  NewClientFormComponent
                ],
  providers:[ClientService, HttpClient]
})

export class ClientModule{}
