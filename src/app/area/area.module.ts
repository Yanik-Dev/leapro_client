import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule }      from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';

import { AreaFormComponent } from './area-form.component';
import { AreaTableComponent } from './area-table.component';
import { AreaService } from './area.service';
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
    exports: [AreaFormComponent, AreaTableComponent],
    declarations:[AreaFormComponent, AreaTableComponent],
    providers:[AreaService]
})
export class AreaModule{
    
}