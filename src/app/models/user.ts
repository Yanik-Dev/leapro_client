/**
 * Defines the structure for a User
 * @property number id
 * @property string email
 * @property string password
 * 
 * @package models
 */
export interface IUser{
    id : number;
    username : string;
    email: string;
    password: string;
    fk_user_type_id : number;
    profile_img : String;
}