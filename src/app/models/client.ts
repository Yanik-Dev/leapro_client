export interface IClient{
     first_name? : String 
     last_name? : String 
     other_name? : String
     profile_img_path?: String
     gender? : String
     details?: String 
     date_of_birth? : Date
     registration_date?: Date
     fk_campaign_id? : String
     name? : String
     customer_type? : String
     status? : String 
     flag? : String;
}

export interface INewClient extends IClient {
     cp_name?: String
     cp_gender?:String
     cp_telephone?:String
     cp_mobile?: String
     cp_fax?: String
     cp_email?: String
     company_name?:String
     established_date?:String
     branch_name? :String
     type? :String
     street? :String
     city?:String
     province?: String
     fk_country_id?: number
}
 
