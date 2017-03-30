import { Component} from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'job-holder',
    templateUrl: 'job-holder.html'
})
export class JobHolderComponent{


    constructor(private router: Router){}

    navigateToPreview(id:any){
        this.router.navigate(['/app/job/preview', id]);
    }

}