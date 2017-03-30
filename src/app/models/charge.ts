import { Service } from './service';
import { ProductArea } from './product-area';
export class Charge{
    
    name: string;
    description: string;
    discount: number;
    tax: number;
    total: number;
    cost: number;
    quantity: number;
    chargeType: string;
    itemId : number;


    constructor(){
        this.name="";
        this.description="";
        this.discount=0;
        this.tax=0;
        this.total= 0;
        this.cost=0;
        this.quantity=0;
        this.chargeType = "";
        this.itemId = 0;
    }




    /**
     * stores service details and calulated amount into
     * a Charge object and return the object
     * @param Service service
     * @return Charge  
     */
    public static mapFromService(service: Service){
         let charge = new Charge();
        charge.itemId  = service.id;
        charge.name = service.name;
        charge.description = service.description;
        charge.cost = (service.manHours ==0)?service.unitCharge:
                        service.unitCharge * service.manHours;
        charge.discount = charge.cost * (service.discount/100);
        charge.quantity = service.manHours;
        charge.tax = charge.cost * (service.tax/100);
        
        charge.total = (charge.cost + charge.tax) - charge.discount ;
        return charge;
    }

    /**
     * stores product-area details and calulated amount into
     * a Charge object and return the object
     * @param ProductArea service
     * @return Charge  
     */
    public static mapFromProductArea(productArea : ProductArea){
         let charge = new Charge();
        charge.itemId  = productArea.id;
        charge.name = productArea.product.name;
        charge.description = productArea.product.description;
        charge.cost = ((productArea.product.quantity ==0)?productArea.product.sellingPrice:
                      productArea.product.sellingPrice * productArea.product.quantity);
        charge.discount = charge.cost * (productArea.product.discount/100);
        charge.quantity = productArea.product.quantity;
        charge.tax = charge.cost * (productArea.product.tax/100);
        charge.total = (charge.cost + charge.tax) - charge.discount ;
        return charge;
    }
}