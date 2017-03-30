import { Component, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '../../shared_module/http-client.service';
import * as Backend from '../../route/backend.route';
import { IUser } from '../../models/user';
@Component({
    selector: 'user-form',
    templateUrl: './user-form.html',
    styleUrls: ['user-form.scss']
})
export class UserFormComponent{
    userForm : FormGroup;
    error: any = {
        status: "",
        msg: ""    
    };
    @Input() user : IUser;
    constructor(private _httpClient : HttpClient, private _formBuilder : FormBuilder){
        this.userForm = this._formBuilder.group({
            'id': [],
            'firstname': [],
            'lastname': [],
            'fk_user_type_id': [],
            'username': [],
            'email': [],
            'password':[],
            'conPassword':[],

        })
    }

    /**
     * create user if form is valid
     */
    submit(){
        if(!this.userForm.valid){
            return;
        }
        console.log(this.userForm.value);
        this._httpClient.post(Backend.ROUTES.UserRegistration,this.userForm.value).subscribe((data: any)=>{
            console.log(JSON.parse(data._body));
            this.error = JSON.parse(data._body);
        });

    }

    /**
     * reset form values to default values
     */
    reset(){
        this.userForm.reset();
    }


}