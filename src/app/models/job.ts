import { INote } from './note'
import { IProductArea } from './product'
import { IService } from './service'

export interface IJob{
    id?:number;
    type? : String;
    summary? : String;
    fk_job_status_id? : number;
    received_date? : String,
    expiry_date? : String,
    products? : Array<IProductArea>,
    services? : Array<IService>
    notes? : Array<INote>   
    status? : String
}