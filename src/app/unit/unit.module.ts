import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule }      from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';

import { UnitFormComponent } from './unit-form.component';
import { UnitTableComponent } from './unit-table.component';
import { UnitService } from './unit.service';
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
    exports: [UnitFormComponent, UnitTableComponent],
    declarations:[UnitFormComponent, UnitTableComponent],
    providers:[UnitService]
})
export class UnitModule{
    
}