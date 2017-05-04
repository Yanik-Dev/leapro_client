import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule }      from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';

import { CategoryFormComponent } from './category-form.component';
import { CategoryTableComponent } from './category-table.component';
import { CategoryService } from './category.service';
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
    exports: [CategoryFormComponent, CategoryTableComponent],
    declarations:[CategoryFormComponent, CategoryTableComponent],
    providers:[CategoryService]
})
export class CategoryModule{
    
}