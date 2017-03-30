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
    clientForm : FormGroup;

    @ViewChild('location') location : any;
    @Output() onClientTypeSelected = new EventEmitter<any>();
    constructor(private _formBuilder : FormBuilder){
        this.clientForm = this._formBuilder.group({
            id : [0],
            firstname: ["", Validators.compose([Validators.required, Validators.minLength(2)])],
            lastname: ["", Validators.compose([Validators.required, Validators.minLength(2)])],
            othername: ["", Validators.compose([Validators.required, Validators.minLength(2)])],
            gender: ["M", Validators.compose([Validators.required])], 
            dateOfBirth: [, Validators.compose([Validators.required])],
            details: ["", Validators.compose([Validators.required, Validators.minLength(2)])],
            campaign: ["", Validators.compose([Validators.required])],
            clientType: ["", Validators.compose([Validators.required])],
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
        this.onClientTypeSelected.emit(this.clientForm.controls['clientType'].value)
    }

}