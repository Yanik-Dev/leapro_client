import { IService } from './service';
import { IProductArea } from './product';
export class Charge{
    
    name: String;
    description: String;
    discount: number;
    tax: number;
    total: number;
    cost: number;
    quantity: number;
    chargeType: String;
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
    public static mapFromService(service: IService){
         let charge = new Charge();
        charge.itemId  = service.id;
        charge.name = service.name;
        charge.description = service.description;
        charge.cost = (service.man_hours ==0)?service.unit_charge:
                        service.man_hours * service.unit_charge;
        charge.discount = charge.cost * (service.discount/100);
        charge.quantity = service.man_hours;
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
    public static mapFromProductArea(productArea : IProductArea){
         let charge = new Charge();
        charge.itemId  = productArea.id;
        charge.name = productArea.product.name;
        charge.description = productArea.product.description;
        charge.cost =(productArea.product.quantity ==0)?productArea.product.selling_cost : productArea.product.selling_cost * productArea.product.quantity;
        charge.discount = charge.cost * (productArea.product.discount/100);
        charge.quantity = productArea.product.quantity;
        charge.tax = charge.cost * (productArea.product.tax/100);
        charge.total = (charge.cost + charge.tax) - charge.discount ;
        return charge;
    }
}