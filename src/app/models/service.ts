
export interface IService{
    id? : number;
    name?: String;
    description?: String;
    man_hours?: number;
    unit_charge?: number;
    discount_type?: String;
    discount?: number;
    tax_type?: String;
    tax?: number;
    fk_category_id: number;
    category?: String;    
}


