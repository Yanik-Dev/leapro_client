import { Component, Input, SimpleChanges, OnInit, Output, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ClientService } from "../../client/client.service";
import { IClient } from "../../models/client"
@Component({
	selector: 'client-selection',
	templateUrl: './client-selection.html',
    styles: ['.hidden {display: none} .select {width: 100%;}']
})
export class ClientSelectionComponent implements OnInit{
    clientForm : FormGroup;
    clients : any = [];
    selectedValue : any = [];
    show : boolean = false;
    @Output() closed : EventEmitter<any> = new EventEmitter();
    @Input() opened : boolean = false;
    @Input() isJob : boolean = true;
    
    constructor(private _formBuilder: FormBuilder, private _router: Router, 
                private _clientService : ClientService){
         
        this.clientForm = this._formBuilder.group({
            id : [],
        })
    }
   
   ngOnChanges(change : SimpleChanges){
      this.show = change.opened.currentValue;
   }
   
   ngOnInit(){
        this._clientService.get().subscribe(
            (res) => {
                if(res.code != 200){
                    //display errors
                    return;
                }
                for(let i = 0; i < res.data.length; i++){
                    this.clients.push(res.data[i]);
                }
            }
        )
    }



   /**
    * navigate to job form
    */
   gotoJob(){
      //set selected client
      this._clientService.setClient(this.selectedValue)

      if(this.isJob){
         this._router.navigate(['/app/job/form', this.isJob]);
       }else{
         this._router.navigate(['/app/job/form', this.isJob]);
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