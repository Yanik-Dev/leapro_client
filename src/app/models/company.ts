import { Branch } from './branch';

/**
 * Defines the structure for the company model
 * @property id int
 * @property name string
 * @property logoPath string
 * @property establishedDate Date;
 * @property branches Branch[]
 * 
 * @author Yanik Blake
 */
export class Company{
    id : number;
    name: string;
    logoPath: string;
    establishedDate: Date;
    branches : Array<Branch> = [];
   
    constructor(){
        this.id = 0;
        this.name = "";
        this.logoPath = "";
        this.establishedDate = new Date();
    }

}