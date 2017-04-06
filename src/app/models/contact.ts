
export class IContact{
    id?: number;
    telephone? : String;
    mobile? : String;
    fax?: String;
    email?: String;
}

export class IContactPerson extends IContact{
    id? : number;
    name? : String;
    gender? : String;
}
