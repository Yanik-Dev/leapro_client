import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CategoryService } from './category.service';
import { Category } from '../models/category';
import {StringFilter} from "clarity-angular";

/**
 * DataGrid filters
 */
class CategoryNameFilter implements StringFilter<Category> {
    accepts(Category: Category, search: string):boolean {
        return Category.category_name.toLowerCase().indexOf(search) >= 0;
    }
}


@Component({
    selector: 'category-table',
    templateUrl: 'category-table.html'
})
export class CategoryTableComponent implements OnInit{
    private categoryNameFilter = new CategoryNameFilter();

    private categoryToEdit : Category;
    categories : Array<Category> =[];

    /**
     * emits an Category object when event is called
     */
    @Output() editClickedHandler = new EventEmitter();

    constructor(private _categoryService : CategoryService){
    }


    init(){
       this._categoryService.get().subscribe((data)=>{
           if(data.data.length > 0){
             this.categories = data.data;
           }
       });
    }
    ngOnInit(){
      this.init();
    }
    /**
     * Refresh the table
     */
    reload(){
        //reload method
    }
    
    /**
     * searches the table 
     */
    search(query: any){
        this._categoryService.get().subscribe((data)=>{
           this.categories = data.data;
       });
    }
    
    
    /**
     * emits the record for a particular row when the
     * edit button is clicked for that row
     * 
     * @param any record
     */
    onEditClicked(category: Category){
        this.editClickedHandler.emit(category);
    }

     /**
     * emits the record for a particular row when the
     * edit button is clicked for that row
     * 
     * @param any record
     */
    editClicked(record: Category){
        this.categoryToEdit = record;
    }
}