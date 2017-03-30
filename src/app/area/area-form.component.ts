import { Component, Input, Output,EventEmitter} from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { IArea } from '../models/area';

@Component({
	selector: 'area-form',
	templateUrl: './area-form.html',
	styleUrls: ['./area.scss']
})
export class AreaFormComponent{
    areaForm : FormGroup;
    
    @Input() area : IArea;
    
    constructor(private _formBuilder: FormBuilder){
        this.areaForm = this._formBuilder.group({
            id : [],
            name: ['',],
            description: ['',],
            length: ['',],
            width: ['',],
            height: ['',],
            depth: ['',]
        })
    }
}