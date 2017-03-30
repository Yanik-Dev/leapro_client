import { Component, OnInit, Input, Output, EventEmitter, SimpleChange } from '@angular/core';
import { IProduct, IProductArea } from '../../models/product';
import { IArea } from '../../models/area';
import { ProductService } from '../product.service';

@Component({
    selector: 'product-area-table',
    templateUrl: 'product-area-table.html'
})
export class ProductAreaTableComponent implements OnInit{
    
    checkedRecords : Array<IProductArea> = [];
    //checkbox handler
    checkedItems : Array<boolean>=[];


    /**
     * determine if checkboxes are to be shown
     */
    @Input() showCheckboxes : boolean = true;

    /**
     * determine if the total area column should be shown
     */
    @Input() showTotalArea : boolean = true;
    
    /**
     * accepts an Array product object to populate table
     */
    @Input() products : Array<IProductArea> = [{
        id : 0,
        product : {},
        areas : []
    }];

    /**
     * accepts a IProductArea object and maps 
     * it to the one matching in the IProductArea array
     */
    @Input() product : IProductArea;

    /**
     * return product object when edit button is clicked
     * @emits Product
     */
    @Output() onEditClicked = new EventEmitter();

    /**
     * return true when add area button is clicked
     * @emits boolean true
     */
    @Output() onAddAreaClicked = new EventEmitter();


    /**
     * return true when add quantity button is clicked
     * @emits boolean true
     */
    @Output() onAddQuantityClicked = new EventEmitter();

    records : Array<IProductArea> = [];


    constructor(private _productService: ProductService){}
    
    ngOnInit(){
        this._productService.get().subscribe(
            (res) => {
               if(res.code != 200){
                   //display errors
                   return;
               }
               for(let i = 0; i < res.data.length; i++){
                    this.records.push({id: i, product: res.data[i],areas : [] });
                    this.records[i].product.quantity = 0;
                    this.checkedItems.push(false);
                }
            }
        )
    }
    
   /**
    * unchecked all checkboxes
    */
    unchecked(){
        for(let i = 0; i < this.checkedItems.length; i++){
          this.checkedItems[i] = false;
        }
    }

    
   setProduct(change : IProductArea){
        let product = change;
        if(product != null){
           for(let i = 0; i < this.products.length; i++){
               if(product.id == this.products[i].id){
                this.products[i]= product;
               }
            }
        }
    }

    /**
     * add IProductArea object to array if checked
     * or removes IProductArea object if checkbox is unchecked
     * 
     * @param any record 
     */
    onChecked(record : any){
       let newArray : Array<IProductArea>=[];
       var found = this.checkedRecords.some(function (el) {
           return el.id == record.id;
        });

        if (!found) {
            this.checkedRecords.push(record);
        }
        else{
          for(let i =0; i < this.checkedRecords.length; i++){
              if(this.checkedRecords[i].id != record.id){
                  newArray.push(this.checkedRecords[i]);
              }
          }
          this.checkedRecords = newArray;
        }
        console.log(this.checkedRecords);
    }

    /**
     * emits the record for a particular row when the
     * edit button is clicked
     * 
     * @param IProductArea record
     * @emits Product
     */
    editClicked(record: IProductArea){
        this.onEditClicked.emit(record.product);
    }


    /**
     * emits true when the add area button is clicked
     * @emits Boolean
     */
    addArea(record: IProductArea){
        this.onAddAreaClicked.emit(record);
    }



    /**
     * emits true when the add quantity button is clicked
     * @emits Boolean
     */
    addQuantity(record: IProductArea){
        this.onAddQuantityClicked.emit(record);
    }


    /**
     * Calculate tota area from an array given
     * @param IProductArea product
     * @return number
     */
    calculateTotalSize(product : IProductArea){
        let totalSize : number = 0;
        for(let i=0; i < product.areas.length;i++){
            totalSize += this.calculateAreaBasedOnProduct(product.areas[i]);
        }
        return totalSize;
    }
   

   /**
    * Calculate area, volume or dept based on product
    * @return number
    */
    calculateAreaBasedOnProduct(area : IArea){
        let size : number = 0;
        size = (area.length * area.width == 0)?area.area:area.length * area.width;

        size = (area.length * area.width * area.height == 0)?area.volume : area.length * area.width * area.height;
        return size;
    }



}