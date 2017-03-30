import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';

@Component({
    selector: 'branch-form',
    templateUrl: './branch-form.html',
    styleUrls: ['./branch.scss']
})
export class BranchFormComponent{
    branchForm : FormGroup;

    @ViewChild('location') location : any;
    
    constructor(private _formBuilder : FormBuilder){
        this.branchForm = this._formBuilder.group({
            id : [0],
            branch_name: ["", Validators.compose([Validators.required, Validators.minLength(2)])],
        })
    }
    

}