import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UnitService } from './unit.service';
import { Unit } from '../models/unit';
import {StringFilter} from "clarity-angular";

/**
 * DataGrid filters
 */
class UnitNameFilter implements StringFilter<Unit> {
    accepts(unit: Unit, search: string):boolean {
        return unit.unit_name.toLowerCase().indexOf(search) >= 0;
    }
}

class UnitCodeFilter implements StringFilter<Unit> {
    accepts(unit: Unit, search: string):boolean {
        return unit.code.toLowerCase().indexOf(search) >= 0;
    }
}


@Component({
    selector: 'unit-table',
    templateUrl: 'unit-table.html'
})
export class UnitTableComponent implements OnInit{
    private unitNameFilter = new UnitNameFilter();
    private unitCodeFilter = new UnitCodeFilter();

    private unitToEdit : Unit;
    units : Array<Unit> =[];

    /**
     * emits an Unit object when event is called
     */
    @Output() editClickedHandler = new EventEmitter();

    constructor(private _unitService : UnitService){
    }

    init(){
        this._unitService.get().subscribe((data)=>{
           if(data.data.length > 0){
             this.units = data.data;
           }
       });
    }

    ngOnInit(){
       this.init()
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

     /**
     * emits the record for a particular row when the
     * edit button is clicked for that row
     * 
     * @param any record
     */
    editClicked(record: Unit){
        this.unitToEdit = record;
    }
}