import { Component,Input, Output, EventEmitter, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Category } from '../models/category';
import { CategoryService } from './category.service';

@Component({
    selector: 'category-form',
    templateUrl: 'category-form.html',
})
export class CategoryFormComponent{
    categoryForm : FormGroup;
    error : any = {isTrue: false, message:''} 

    @Input() opened : boolean = false;

    @Output() closed = new EventEmitter();

    
    @Output() onFormSave = new EventEmitter();
    /**
     * populate form fields
     */
    @Input() category : Category;

    /**
     * Constructs reactive form
     */
    constructor(private _formBuilder: FormBuilder, private _categoryService : CategoryService){
        this.categoryForm = this._formBuilder.group({
            category_id : [],
            category_name: ['', Validators.compose([Validators.required])],
            description: ['',],
            
        })
    }
   
   /**
    * watches the input variable "Category" and update form fields 
    * when Category values change
    * @param SimpleChange change array of all the Input variables
    */
   ngOnChanges(change : SimpleChange){
        let value = (change['category'])? <Category> change['category'].currentValue: this.category;
        if(value){
            this.categoryForm.patchValue(
                {
                   category_id : value.category_id,
                   category_name : value.category_name,
                   description: value.description,             
                }
            )
        }
    }


        /**
     * save or update the form information
     */
    save(){
        if(this.categoryForm.valid){
           if(this.categoryForm.controls.category_id.value > 0){
                this._categoryService.update(this.categoryForm.value).subscribe(res=>{
                    if(res.code == 201){
                        this.onFormSave.emit(true);
                        this.error.isTrue = false;
                    }else{
                        this.error = {isTrue: true, message: 'A server error as occur'}
                    }
                });
           }else{
                this._categoryService.insert(this.categoryForm.value).subscribe(res=>{
                    if(res.code == 201){
                        this.onFormSave.emit(true);
                        this.error.isTrue = false;
                        this.reset();
                    }
                    if(res.code== 409){
                       this.error = {isTrue: true, message: 'Category already exist'}
                    }else{
                        this.error = {isTrue: true, message: 'A server error as occur'}
                    }
                });
           }
        }else{
            this.touchFormFields();
            this.error = {isTrue: true, message: 'Invalid form fields'}
        }
    }
    
    /**
     * activate validations on form fields
     */
    touchFormFields(){
        this.categoryForm.controls.category_name.markAsTouched({onlySelf: false})
        this.categoryForm.controls.description.markAsTouched({onlySelf: false})
    }

    /**
     * resets form fields
     */
    reset(){
        this.categoryForm.reset();
    }

    /**
     * closed modal form
     */
    close(){
        this.reset()
        this.closed.emit(false)
        this.opened = false;
    }
}