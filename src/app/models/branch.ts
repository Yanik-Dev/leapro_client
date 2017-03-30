import { Address } from './address';
import { ContactPerson } from './contact-person';

/**
 * Defines the structure for the branch model
 * @property id int
 * @property name string
 * @property location Address
 * @property contacts ContactPerson[]
 * 
 * @author Yanik Blake
 */
export class Branch{
    id : number;
    name : string;
    location: Address;
    contacts : Array <ContactPerson> = [];

    constructor(){
        this.id = 0;
        this.name = "";
        this.location = new Address();
    }
}