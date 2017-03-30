import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { LoginService } from './login.service';

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    exports: [LoginComponent],
    declarations: [LoginComponent],
    providers: [LoginService]
})
export class LoginModule{

}