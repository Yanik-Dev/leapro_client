import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
    selector: 'client-form',
    templateUrl: './client-form.html',
    styleUrls: ['../client.scss']
})
export class ClientFormComponent{
    preview: string;
    imgToUpload: File;
    public clientForm : FormGroup;

    @ViewChild('location') location : any;
    @Output() onClientTypeSelected = new EventEmitter<any>();
    constructor(private _formBuilder : FormBuilder){
        this.clientForm = this._formBuilder.group({
            id : [0],
            first_name: ["", Validators.compose([Validators.required, Validators.minLength(2)])],
            last_name: ["", Validators.compose([Validators.required, Validators.minLength(2)])],
            other_name: ["", Validators.compose([Validators.required, Validators.minLength(2)])],
            gender: ["M", Validators.compose([Validators.required])], 
            date_of_birth: [, Validators.compose([Validators.required])],
            details: ["", Validators.compose([Validators.required, Validators.minLength(2)])],
            fk_campaign_id: ["", Validators.compose([Validators.required])],
            customer_type: ["", Validators.compose([Validators.required])],
        })
    }
    
    /**
     * Store selected file in a variable and displays image in preview window
     * @param EventTarget fileInput
     */
    onFileSelected(fileInput : any){
        this.imgToUpload = <File> fileInput.target.files[0];
        var target: EventTarget;
		var reader = new FileReader();
		reader.onload = (e:any)=>{
			this.preview =e.target.result;
		}
		reader.readAsDataURL(this.imgToUpload);
    }


    clientTypeSelected(){
        this.onClientTypeSelected.emit(this.clientForm.controls['customer_type'].value)
    }

}