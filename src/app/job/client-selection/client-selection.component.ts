import { Component, Input, SimpleChanges, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
	selector: 'client-selection',
	templateUrl: './client-selection.html'
})
export class ClientSelectionComponent{
    clientForm : FormGroup;
    show : boolean = false;
    @Output() closed : EventEmitter<any> = new EventEmitter();
    @Input() opened : boolean = false;
    @Input() isJob : boolean = true;
    constructor(private _formBuilder: FormBuilder, private _router: Router){
         
        this.clientForm = this._formBuilder.group({
            id : [],
        })
    }
   
   ngOnChanges(change : SimpleChanges){
      this.show = change.opened.currentValue;
   }
   
   /**
    * navigate to job form
    */
   gotoJob(){
       if(this.isJob){
         this._router.navigate(['/app/job/form']);
       }else{
         this._router.navigate(['/app/job/form']);
       }
   }

   /**
    * close modal
    */
    close(){
        this.show = false;
        this.closed.emit(false)
    }


}