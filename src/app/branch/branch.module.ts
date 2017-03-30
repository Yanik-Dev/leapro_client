import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ClarityModule } from 'clarity-angular';
import { LocationModule } from '../location/location.module';

import { BranchFormComponent } from './branch-form.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    ClarityModule,
    LocationModule
    
  ],
  exports: [ 
             BranchFormComponent,
            ],
  declarations: [
                  BranchFormComponent
                ],
  providers:[]
})

export class BranchModule{}
