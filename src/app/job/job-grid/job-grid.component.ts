import { Component, Input, Output, EventEmitter, SimpleChange} from '@angular/core';

@Component({
    selector: 'job-grid',
    templateUrl: 'job-grid.html'
})
export class JobGridComponent{

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
    constructor(){}

    editButtonClicked(){
        this.onEditButtonClicked.emit();
    }

    editViewClicked(){
        this.onViewButtonClicked.emit();
    }

}