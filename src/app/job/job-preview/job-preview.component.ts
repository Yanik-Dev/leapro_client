import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IService } from '../../models/service';
import { IProductArea } from '../../models/product';
import { INote } from '../../models/note';
import { Charge } from '../../models/charge';
import { IJob } from "app/models/job";
import { JobService } from "../job.service";
@Component({
	selector: 'job-preview',
	templateUrl: './job-preview.html',
})
export class JobPreviewComponent implements OnInit, OnDestroy{
    charges : Array<Charge> = [];
    //Required variables necessary to contruct job-order or estimate object
    serviceList : Array<IService> = [];
    productList : Array<IProductArea> = [];
      notesList : Array<INote> = [];
      job : IJob;
    //keeps track of the product to which to the quantity button is clicked
    //or which product the add area button is clicked on
    selectedProduct : IProductArea;

    constructor(private _route: ActivatedRoute, private _jobService : JobService){}

    ngOnInit(){
        this._route.params.subscribe((param : any)=>{
               this.job.id = param['id'];
               this._jobService.findOne(this.job.id).subscribe((res)=>{
                        this.job = res;
                        
               })
        })
    }

    ngOnDestroy(){
        //if(this.route) this.route.params.unsubscribe();
    }
    /**
     * Maps and calculates service charges
     */
    addServiceCharges(services: any = []){
       var index = 0;
       let tempArr : Array<any> = [];

       //cancel function execution if parameter is empty
       if(services == null) return;

       if(this.serviceList.length > 0){
            for (var i=0; i<this.serviceList.length; i++) {
                index = services.indexOf(this.serviceList[i]);
                if (index > -1) {
                   this.serviceList[i] = services[index];
                }else{
                    tempArr.push(services[i]);
                }
            }
            this.serviceList.concat(tempArr);
       }
       else{
          this.serviceList = services.slice();
       }
        for(let i = 0; i < services.length; i++){
            let returnIndex :number;
            returnIndex = this.checkIfProductOrServiceExist(this.charges, services[i],"S");
            let charge = new Charge();
            charge = Charge.mapFromService(services[i]);
            charge.chargeType = "S";//Identifies the charge as a service charge
            if(returnIndex > -1){
                this.charges[returnIndex] =charge;
                continue;
            }
            this.charges.push(charge);
        }
    }


    /**
     * Maps and calculates product charges
     */
    addProductCharges(products: any = []){
       var index = 0;
       let tempArr : Array<any> = [];

       //cancel function execution if parameter is empty
       if(products.length == 0){ return;}
       
       //check if charges exist for products and add adds products to list if empty
       //if
       if(this.productList.length > 0){
            for (var i=0; i<this.productList.length; i++) {
                index = products.indexOf(this.productList[i]);
                if (index > -1) {
                    this.productList[i] = products[index];
                }else{
                    tempArr.push(products[i]);
                }
            }
            this.productList.concat(tempArr);
       }
       else{
            this.productList = products.slice();
       }
        for(let i = 0; i < products.length; i++){
            let returnIndex :number;
            returnIndex = this.checkIfProductOrServiceExist(this.charges, products[i],"P");
            let charge = new Charge();
            charge = Charge.mapFromProductArea(products[i]);
            charge.chargeType = "P";//Identifies the charge as a product charge
            if(returnIndex > -1){
                this.charges[returnIndex] =charge;
                continue;
            }
            this.charges.push(charge);
        }
    }

    /**
     * returns the index number if key is found in the array and the type is true
     * @param Array arr
     * @param any key
     * @param string type
     * @return number
     */
    checkIfProductOrServiceExist(arr : Array<any>, key: any, type:string):number{
        let index:number;
        for(let i = 0; i < arr.length; i++){
            if(arr[i].itemId == key.id && arr[i].chargeType == type){
               index = i;
               break;
            }

        }
        return (index => 0)?index: -1;
    }

    /**
     * remove a specific charge from charges table 
     * @param Charge charge
     */
    removeCharge(charge: Charge){
        var index = this.charges.indexOf(charge);
        if(index > -1){
                //remove charge from charges array
            this.charges.splice(index,1);
            index = -1;

            //check if the charge is a service charge or product charge
            if(charge.chargeType == "S"){
                //search for charge in service array
                for(let i = 0; i< this.serviceList.length; i++){
                    if(this.serviceList[i].name == charge.name){
                        index = i;
                        break;
                    }
                    
                }
                if(index > -1){
                    //remove charge from servicelist
                    this.serviceList.splice(index, 1);
                }
            }
            else{
                //search for charge in product array
                for(let i = 0; i< this.productList.length; i++){
                    if(this.productList[i].product.name == charge.name){
                        index = i;
                        break;
                    }
                    
                }
                if(index > -1){
                    //remove charge from productList
                    this.productList.splice(index, 1);
                }
            }
        }
    }



    /**
     * set the selected product when a button is checked on 
     * a specific product row
     */
    setSelectedProduct(product : IProductArea){
        this.selectedProduct = product;
    }


    /**
     * set the areas for the product selected
     * @return ProductArea
     */
    setSelectedProductArea(areas: any){
       this.selectedProduct.areas = areas.slice();
       return this.selectedProduct;
    }

     /**
     * set the quantity for the product selected
     * @return ProductArea
     */
    setSelectedProductQuantity(value: number){
       this.selectedProduct.product.quantity = value;
       return this.selectedProduct;
    }

    /**
     * calculates the subtotal for all the charges
     * @return number 
     */
    calculateSubTotal(){
        let subtotal : number = 0;
        for(let i = 0; i < this.charges.length; i++){
            subtotal += this.charges[i].total;
        }
        return subtotal;
    }



    /**
     * calculates the total discounted amount for all the charges
     * @return number
     */
    calculateDiscountedAmount(){
         let discount : number = 0;
        for(let i = 0; i < this.charges.length; i++){
            discount += this.charges[i].discount ;
        } 
        return discount;
    }



    /**
     * calculates the total taxed amount for all the charges
     * @return number
     */
    calculateTaxAmount(){
         let totalTax : number = 0;
        for(let i = 0; i < this.charges.length; i++){
            totalTax +=this.charges[i].tax;
        }     
        return totalTax;
    }

}