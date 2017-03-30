
/**
 * Defines the structure for the contact model
 * @property id int
 * @property telephone string
 * @property mobile string
 * @property fax Date;
 * @property email string
 * 
 * @author Yanik Blake
 */
export class Contact{
    id: number;
    telephone : string;
    mobile : string;
    fax: string;
    email: string;

    constructor(){
        this.id = 0;
        this.telephone = "";
        this.mobile = "";
        this.fax = "";
        this.email = "";
    }

}