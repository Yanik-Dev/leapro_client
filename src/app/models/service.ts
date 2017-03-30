
export interface IService{
    id? : number;
    name?: string;
    description?: string;
    man_hours?: number;
    unit_charge?: number;
    discount_type?: string;
    discount?: number;
    tax_type?: string;
    tax?: number;
    fk_category_id: number;
    category?: String;    
}


