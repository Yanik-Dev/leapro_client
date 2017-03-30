import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule }      from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { SearchFilterModule } from '../search-filter/search-filter.module';
import { HttpClient } from '../shared_module/http-client.service';
import { UserFormComponent } from './user-form/user-form.component';

@NgModule({
    imports: [
       BrowserModule, 
       RouterModule,
       FormsModule, 
       ReactiveFormsModule,
       HttpModule, 
       JsonpModule, 
       ClarityModule,
       SearchFilterModule,
     ],
    exports: [ UserFormComponent],
    declarations:[ 
        UserFormComponent,

    ],
    providers:[HttpClient]
})
export class UserModule{
    
}