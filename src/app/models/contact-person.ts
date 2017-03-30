import { Contact } from './contact';

export class ContactPerson{
    id: number;
    name: string;
    gender: string;
    contact: Contact;

    constructor(){
        this.id = 0;
        this.name = "";
        this.gender = "";
        this.contact = new Contact();
    }

}