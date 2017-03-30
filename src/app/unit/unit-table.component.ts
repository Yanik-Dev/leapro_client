import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UnitService } from './unit.service';
import { Unit } from '../models/unit';
@Component({
    selector: 'unit-table',
    templateUrl: 'unit-table.html'
})
export class UnitTableComponent implements OnInit{
    
    units : Array<Unit> =[];

    /**
     * emits an Unit object when event is called
     */
    @Output() editClickedHandler = new EventEmitter();

    constructor(private _unitService : UnitService){
    }


    ngOnInit(){
       this._unitService.get().subscribe((data)=>{
           this.units = data.json();
       });
    }
    /**
     * Refresh the table
     */
    reload(){
        //reload method
    }
    
    /**
     * searches the table 
     */
    search(query: any){
        this._unitService.get().subscribe((data)=>{
           this.units = data.json();
       });
    }
    
    
    /**
     * emits the record for a particular row when the
     * edit button is clicked for that row
     * 
     * @param any record
     */
    onEditClicked(unit: Unit){
        this.editClickedHandler.emit(unit);
    }
}