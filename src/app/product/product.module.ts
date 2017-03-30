import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule }      from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';

import { ProductFormComponent } from './product-form/product-form.component';
import { ProductService } from './product.service';
import { ProductAreaTableComponent } from './product-area-table/product-area-table.component';
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
    exports: [ProductFormComponent, ProductAreaTableComponent],
    declarations:[ProductFormComponent,ProductAreaTableComponent],
    providers:[ProductService]
})
export class ProductModule{}