import { Component, Input, Output, EventEmitter, SimpleChange } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IProduct } from '../../models/product';
import { ProductService } from '../product.service';

@Component({
    selector: 'product-form',
    templateUrl: 'product-form.html'
})
export class ProductFormComponent{
    productForm : FormGroup;
    error : any = {isTrue: false, message:''} 
    /**
     * accepts a product object to populate form
     */
    @Input() product : IProduct;

    @Input() opened : boolean = false;

    @Output() closed = new EventEmitter();
    /**
     * handles  when form is saved
     */
    @Output() onFormSave = new EventEmitter();
    

    /**
     * handles  when unit button is clicked
     */
    @Output() onAddUnitButtonCliked  = new EventEmitter();

    constructor(private _formBuilder : FormBuilder, private _productService : ProductService){
        this.productForm = this._formBuilder.group({
            id : [],
            name : [, Validators.compose([Validators.required, Validators.maxLength(20)])],
            fk_category_id: [, Validators.compose([Validators.required])],
            description: [, Validators.compose([Validators.maxLength(20)])],
            quantity: [,],
            unit_cost: [0, Validators.compose([Validators.required])],
            discount: [0,],
            discount_type: [,],
            tax: [0,],
            tax_type: [,],
            selling_cost: [0, Validators.compose([Validators.required])],
            application: [, Validators.compose([Validators.maxLength(20)])],
            dilution: [, Validators.compose([Validators.maxLength(20)])],
            fk_unit_id: [,Validators.compose([Validators.required])],
            usage_unit: [,Validators.compose([Validators.required])]
        })
       
    }
    
    ngOnChanges(change : SimpleChange){
        let value = (change['product'])?<IProduct> change['product'].currentValue: this.product;
        if(value){
            this.productForm.patchValue(
                {
                id : value.id,
                name : value.name,
                fk_category_id : value.fk_category_id,
                description: value.description,
                application: value.application,
                dilution: value.dilution,
                quantity : value.quantity,
                fk_unit_id : value.fk_unit_id,
                unit_cost: value.unit_cost,
                selling_cost: value.selling_cost,
                discount : value.discount,              
                discount_type : value.discount_type,               
                tax : value.tax,               
                tax_type : value.tax_type,   
                usage_unit : value.usage_unit
                }
            )
        }
    }
    
    /**
     * save or update the form information
     */
    save(){
        if(this.productForm.valid){
           if(this.productForm.controls.id.value > 0){
                this._productService.update(this.productForm.value).subscribe(res=>{
                    if(res.code == 201){
                        //creation successful
                    }else{
                        this.error = {isTrue: true, message: 'A server error as occur'}
                    }
                });
           }else{
                this._productService.insert(this.productForm.value).subscribe(res=>{
                    if(res.code == 201){
                        //creation successful
                        //clear form
                    }
                    if(res.code== 409){
                       this.error = {isTrue: true, message: 'Product already exist'}
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
        this.productForm.controls.name.markAsTouched({onlySelf: false})
        this.productForm.controls.fk_category_id.markAsTouched({onlySelf: false})
        this.productForm.controls.description.markAsTouched({onlySelf: false})
        this.productForm.controls.unit_cost.markAsTouched({onlySelf: false})
        this.productForm.controls.selling_cost.markAsTouched({onlySelf: false})
        this.productForm.controls.application.markAsTouched({onlySelf: false})
        this.productForm.controls.dilution.markAsTouched({onlySelf: false})
        this.productForm.controls.fk_unit_id.markAsTouched({onlySelf: false})
        this.productForm.controls.usage_type.markAsTouched({onlySelf: false})
    }

    
    /**
     * Emits true when add unit button is clicked
     */
    addUnit(){
        this.onAddUnitButtonCliked.emit(true);
    }
    


    /**
     * calculates the subtotal for a service
     * @return number 
     */
    calculateSubTotal(){
        return  this.productForm.controls['selling_cost'].value;

    }


    /**
     * calculates the discounted amount for a service
     * @return number
     */
    calculateDiscountedAmount(){
         return (this.productForm.controls['discount_type'].value == "P")?
                 this.calculateSubTotal() * (this.productForm.controls['discount'].value/100)
                :(this.productForm.controls['discount_type'].value=="F") ? this.productForm.controls['discount'].value
                : (this.productForm.controls['id'].value > 0) ? this.product.discount: 0;

    }

    /**
     * calculates the taxed amount for a service
     * @return number
     */
    calculateTaxAmount(){
         return (this.productForm.controls['tax_type'].value == "P")?
                 this.calculateSubTotal() * (this.productForm.controls['tax'].value/100)
                :(this.productForm.controls['tax_type'].value=="F") ? this.productForm.controls['tax'].value
                : (this.productForm.controls['id'].value > 0) ? this.product.tax: 0;

    }

    /**
     * closed modal form
     */
    close(){
        this.reset()
        this.closed.emit(false)
        this.opened = false;
    }

    /**
     * resets the form
     */
    reset(){
        this.productForm.reset();
    }
}