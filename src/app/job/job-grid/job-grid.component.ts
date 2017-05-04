import { Component, Input, Output, EventEmitter, SimpleChange } from '@angular/core';
import { State } from "clarity-angular";
import { JobService } from "app/job/job.service";
import { IJob } from "app/models/job";
import {StringFilter} from "clarity-angular";

/**
 * DataGrid filters
 */
class JobIdFilter implements StringFilter<IJob> {
    accepts(job: IJob, search: string):boolean {
        return "" + job.id == search;
    }
}

class JobSummaryFilter implements StringFilter<IJob> {
    accepts(job: IJob, search: string):boolean {
        return job.summary.toLowerCase().indexOf(search) >= 0;
    }
}

class JobReceivedDateFilter implements StringFilter<IJob> {
    accepts(job: IJob, search: string):boolean {
        return job.received_date.toLowerCase().indexOf(search) >= 0;
    }
}

class JobStatusFilter implements StringFilter<IJob> {
    accepts(job: IJob, search: string):boolean {
        return job.status.toLowerCase().indexOf(search) >= 0;
    }
}

@Component({
    selector: 'job-grid',
    templateUrl: 'job-grid.html'
})
export class JobGridComponent{
    private jobIdFilter  =new JobIdFilter();
    private jobSummaryFilter  =new JobSummaryFilter();
    private jobReceivedDateFilter = new JobReceivedDateFilter();
    private jobStatusFilter = new JobStatusFilter();
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