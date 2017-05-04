import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ServicesService } from './../services.service';
import { IService } from '../../models/service';
import { State } from "clarity-angular";
import {StringFilter} from "clarity-angular";

/**
 * DataGrid filters
 */
class ServiceNameFilter implements StringFilter<IService> {
    accepts(Service: IService, search: string):boolean {
        return Service.name.toLowerCase().indexOf(search) >= 0;
    }
}

class ServiceCategoryFilter implements StringFilter<IService> {
    accepts(Service: IService, search: string):boolean {
        return Service.category.toLowerCase().indexOf(search) >= 0;
    }
}

@Component({
    selector: 'service-table',
    templateUrl: 'service-table.html'
})
export class ServiceTableComponent implements OnInit{
    
    private serviceNameFilter = new ServiceNameFilter();
    private serviceCategoryFilter = new ServiceCategoryFilter();
    
    checkedRecords : Array<IService> = [];
    //checkbox handler
    checkedItems : Array<boolean>=[];
    
    records : Array<IService> =[];

    serviceToEdit : IService

    loading = false;

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
     * filters datagrid
     * @param state 
     */
    refresh(state: State) {
       this.loading = true;
        let filters:{[prop:string]: any} = {};
        
        if (state.filters) {
            for (let filter of state.filters) {
                let {property, value} = <{property: string, value: string}>filter;
                filters[property] = [value];
                console.log(filters)
            }

        }
        this.loading = false;
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
     * query database for Services 
     * @param name 
     * @param category 
     */
    search(name: any,category:any){
        this.records = []
        this._servicesService.search(name, category).subscribe(
            (res) => {
               if(res.code != 200){
                   //display errors
                   return;
               }
               for(let i = 0; i < res.data.length; i++){
                    this.records.push(res.data[i]);
                }
                this.loading = false;
            }
        )
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
    editClicked(record: IService){
        this.serviceToEdit = record;
    }
}