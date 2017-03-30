import { Component, Input, Output, EventEmitter, SimpleChange} from '@angular/core';

@Component({
    selector: 'free-input',
    templateUrl: 'input.html'
})
export class FreeInputComponent{
    
    value : any;

    /**
     * sets the value for the input box
     */
    @Input() inputValue : any ="";
    
    /**
     * Set the type for the input box
     */
    @Input() type : string = "text";
    constructor(){}




}