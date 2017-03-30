import { NgModule } from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { SearchFilterComponent } from '../search-filter/search-filter.component';

@NgModule({
    imports: [
       BrowserModule, 
       FormsModule, 
       ReactiveFormsModule,
       HttpModule, 
       JsonpModule, 
     ],
    exports: [SearchFilterComponent, ],
    declarations:[SearchFilterComponent],
    providers:[]
})
export class SearchFilterModule{
    
}