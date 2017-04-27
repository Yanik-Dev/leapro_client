import { Component, Input, Output, EventEmitter, SimpleChange } from '@angular/core';
import { State } from "clarity-angular";
import { JobService } from "app/job/job.service";
import { IJob } from "app/models/job";

@Component({
    selector: 'job-grid',
    templateUrl: 'job-grid.html'
})
export class JobGridComponent{

    records : Array<any>;
    /**
     * set the type of job to display { Estimate, Job Order}
     */
    @Input() jobType : string;

    /**
     * determine if the edit column should be shown
     */
    @Input() showEditColumn : boolean = true;

    /**
     * determine if the view column should be shown
     */
    @Input() showViewColumn : boolean = true;

    /**
     * emits job object when edit button is clicked
     */
    @Output() onEditButtonClicked = new EventEmitter();

    /**
     * emits job object when view button is clicked
     */
    @Output() onViewButtonClicked = new EventEmitter();
    constructor(private _jobService: JobService){
        this._jobService.get().subscribe((data)=>{
           if(data.code > 201){
               //display error
           }
           console.log(data);
           this.records = data.data;
       });
    }

    refresh(state: State) {
       // this.loading = true;
        // convert the filters from an array to a map,
        // because that's what our backend-calling service is expecting
        let filters:{[prop:string]: any} = {};
        
        if (state.filters) {
            for (let filter of state.filters) {
                let {property, value} = <{property: string, value: string}>filter;
                filters[property] = [value];
                console.log(filters['undefined'])
            }

        }
     
    } 
    editButtonClicked(){
        this.onEditButtonClicked.emit();
    }

    editViewClicked(){
        this.onViewButtonClicked.emit();
    }

}