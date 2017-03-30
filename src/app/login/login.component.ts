import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from '../models/user';
import { LoginService } from './login.service'

@Component({
    selector: 'login',
    templateUrl: './login.html',
    styleUrls: ['./login.scss']
})
export class LoginComponent{
    loginForm : FormGroup;
         user : IUser;

    error : any = { status : "", msg : ""}

    constructor( private _router : Router, private _formBuilder: FormBuilder, private _loginService : LoginService){
        this.loginForm = this._formBuilder.group({
            username: ['',Validators.compose([Validators.required])],
            password: ['', Validators.compose([Validators.required])]
        });
        console.log(this.loginForm);
    }

    /**
     * create user if form is valid
     */
    submit(){
        if(!this.loginForm.valid){
            return;
        }

        this._loginService.authenicate(this.loginForm.value).subscribe(res => {
            if(res.code != 200){
                this.error
                return;
            }
            this._router.navigate(['/app/']);
        })
    }


}