/**
 * Defines the structure for the address model
 * @property id int
 * @property street string
 * @property city string
 * @property province string
 * @property zip string
 * @property type string
 * @property status string
 * @property details string
 * @property country object { id number, country string }
 * 
 * @author Yanik Blake
 */
export class Address {
    id: number;
    street: String;
    city: String;
    province: String;
    zip: string;
    type: string;
    status: string;
    details: string;
    country: {
        id: number,
        country: string,
    };

    constructor() {
        this.id = 0;
        this.street = '';
        this.city = '';
        this.zip = '';
        this.type = '';
        this.status = '';
        this.details = '';
        this.province = '';
        this.country = {
            id : 0,
            country: ''
        }
    }
}

