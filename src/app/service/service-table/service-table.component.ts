import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ServicesService } from './../services.service';
import { IService } from '../../models/service';
@Component({
    selector: 'service-table',
    templateUrl: 'service-table.html'
})
export class ServiceTableComponent implements OnInit{
    
    
    checkedRecords : Array<IService> = [];
    //checkbox handler
    checkedItems : Array<boolean>=[];
    
    records : Array<IService> =[];

    /**
     * determine if checkboxes are to be shown
     */
    @Input() showCheckboxes : boolean = true;
    @Output() checkedValuesHandler = new EventEmitter();
    @Output() editClickedHandler = new EventEmitter();

    constructor(private _servicesService : ServicesService){}



    ngOnInit(){
        this.init();
    }

    init(){
        this._servicesService.get().subscribe((data)=>{
           if(data.code > 201){
               //display error
           }
           console.log(data);
           this.records = data.data;
           for(let i = 0; i < this.records.length; i++){
                 this.checkedItems.push(false);
            }
       });
    }

    /**
     * Refresh the table
     */
    reload(){
       this.init()
    }
    

   /**
    * unchecked all checkboxes
    */
    unchecked(){
        for(let i = 0; i < this.checkedItems.length; i++){
          this.checkedItems[i] = false;
        }
    }

    /**
     * searches the table 
     */
    search(query: any){
        //search
    }


    
    /**
     * add service object to array if checked
     * or removes service object if checkbox is unchecked
     * 
     * @param any record 
     */
    onChecked(record : any){
       let newArray : Array<IService>=[];
       var found = this.checkedRecords.some(function (el) {
           return el.id == record.id;
        });

        if (!found) {
            this.checkedRecords.push(record);
        }
        else{
          for(let i =0; i < this.checkedRecords.length; i++){
              if(this.checkedRecords[i].id != record.id){
                  newArray.push(this.checkedRecords[i]);
              }
          }
          this.checkedRecords = newArray;
        }
    }
    


    /**
     * emits the record for a particular row when the
     * edit button is clicked for that row
     * 
     * @param any record
     */
    onEditClicked(record: IService){
        this.editClickedHandler.emit(record);
    }
}