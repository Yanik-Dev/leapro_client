import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'search-filter',
    template: ` 
       <div class="row">
            <div class=" col-sm-5">
                 <input type="search" class="search-btn" [(ngModel)]="query.searchbar" placeholder="{{searchBarPlaceholder}}">
            </div>
            <div class=" col-sm-4">
                <div class="select">
                    <select [(ngModel)]="query.selectbox">
                        <option value="" disabled selected>{{optionPlaceholder}}</option>
                        <option *ngFor="let option of selectOptions; let i = index" value="i">
                            {{option}}
                        </option>
                    </select>
                </div>
             </div>
            <div class=" col-sm-3">
                <button class="btn btn-sm" (click)="buttonClicked()">{{buttonTitle}}</button>
            </div>
        </div>`,
    styles:[
        `.search-btn{width:100%; border: 1px solid #d3d3d3; padding: 0px 10px 0px 10px;}`
    ]
})
export class SearchFilterComponent{
    
    query : { searchbar: string, selectbox: string } 
          = { searchbar: "",     selectbox: "" };

    /**
     * sets the button tittle
     */
    @Input() buttonTitle : string = "";

    /**
     * sets the search bar placeholder
     */
    @Input() searchBarPlaceholder : string = "";    
    
    /**
     * sets the select box placeholder
     */
    @Input() optionPlaceholder : string = "";
    
    /**
     * populates the options for select box
     */
    @Input() selectOptions : Array<any> = [];
   
    /**
     * handles the search values
     */
    @Output() onSearchFinish = new EventEmitter();
    

    /**
     * emits true when button is clicked
     */
    @Output()  buttonClickHandler = new EventEmitter();

    /**
     * emits search values from component
     */
    search(){
        this.onSearchFinish.emit(this.query);
    }

   /**
    * emits true when button is clicked
    */
    buttonClicked(){
        this.buttonClickHandler.emit(true);
    }
    constructor(){
       
       
    }

    
}