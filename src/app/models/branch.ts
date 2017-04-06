import { IAddress } from './address';
import { IContactPerson } from './contact';

export interface IBranch extends IAddress{
    id? : number;
    name? : string;
    fk_company_id? : number;
    contacts? : Array <IContactPerson>;
}