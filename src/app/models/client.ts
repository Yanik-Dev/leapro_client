import { Campaign } from './campaign';

/**
 * Defines the structure for the client model
 * @property id int
 * @property firstname string
 * @property lastname string
 * @property othername string
 * @property profileImagePath string
 * @property dateOfBirth Date
 * @property gender string
 * @property details string
 * @property campaign Campaign
 * @property registrationDate Date
 * 
 * @author Yanik Blake
 */
export class Client{

    constructor(
        public firstname : String = "",
        public lastname : String = "",
        public othername : String = "",
        public profileImagePath: String = "",
        public gender : String=  "",
        public details: String = "",
        public dateOfBirth : Date,
        public registrationDate: Date,
        public campaign: Campaign,
        public name : String
        ){}


     
    

}