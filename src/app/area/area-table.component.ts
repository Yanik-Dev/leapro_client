import { Component, Input, Output, EventEmitter } from '@angular/core';

import { IArea } from '../models/area';
import { AreaService } from './area.service';
@Component({
    selector: 'area-table',
    templateUrl: 'area-table.html'
})
export class AreaTableComponent{
    checkedAreas : Array<IArea> = [];
    //checkbox handler
    checkedItems : Array<boolean>=[];

    @Input() areas : Array<IArea> =[];

    @Output() checkedValuesHandler = new EventEmitter();
    @Output() editClickedHandler = new EventEmitter();

    constructor(private _areaService : AreaService){}


   /**
    * unchecked all checkboxes
    */
    unchecked(){
        for(let i = 0; i < this.checkedItems.length; i++){
          this.checkedItems[i] = false;
        }
    }

    /**
     * Refresh the table
     */
    reload(){
        this._areaService.get().subscribe((data)=>{
           console.log(data.json());
           this.areas = data.json();
       });
    }
    
    /**
     * searches the table 
     */
    search(query: any){
        //search
    }

    onFinished(){
        //TODO: emit checked areas
        this.checkedValuesHandler.emit(this.checkedAreas);
    }
    
    /**
     * add service object to array if checked
     * or removes service object if checkbox is unchecked
     * 
     * @param any record 
     */
    onChecked(record : any){
       let index : number;
       index = this.checkedAreas.indexOf(record);
       if(index == -1){
           this.checkedAreas.push(record);
       }
       else{
           this.checkedAreas.splice(index, 1);
       }
       console.log(this.checkedAreas);
    }
    
    /**
     * emits the record for a particular row when the
     * edit button is clicked for that row
     * 
     * @param any record
     */
    onEditClicked(record: IArea){
        this.editClickedHandler.emit(record);
    }
}