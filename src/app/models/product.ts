import { IArea } from './area'
export interface IProduct {
    id?: number
    name?: String
    description?: String
    unit_cost?: number
    discount_type?: String
    discount?: number
    tax_type?: String
    tax?: number
    selling_cost?: String
    application?: String
    dilution?: String
    fk_category_id?: number
    category?: String
    fk_unit_id?: number
    quantity?: number
    usage_unit?: String
}


export interface IProductArea {
    id? : number;
    product? : IProduct;
    areas?: Array<IArea>
}