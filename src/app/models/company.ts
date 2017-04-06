import { IBranch } from './branch';

export interface ICompany{
    id? : number;
    name? : string;
    logo_path? : string;
    established_date? : Date;
    fk_customer_id : number;
    branches? : Array<IBranch>;
}