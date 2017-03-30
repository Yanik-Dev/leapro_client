import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'circle',
	templateUrl: './circle.html',
	styleUrls: ['./circle.scss']
})
export class CircleComponent{
    
    /**
     * sets the size of the circle
     * values 'big', 'small'. 
     * default vale is medium
     */
    @Input() size: string;


    /**
     * sets the size of the loader
     * values 'p1'-'p100'
     */
    @Input() pieSize: string;
    

    /**
     * sets pre-defined color for the loader
     */
    @Input() colorClass: string;


    /**
     * sets the percentage of the circle
     * values 'green', 'orange', 'dark green', 'dark orange'
     * default value is blue
     */
    @Input() value: string;


    constructor(){
       
    }




}