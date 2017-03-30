/**
 * Defines the structure for the Note model
 * @property id int
 * @property details string
 * 
 * @author Yanik Blake
 */
export class Note{
        id : number;
    details : string;
    typeId : number;
    
    constructor(){
        this.id = 0;
        this.details = "";
    }
}