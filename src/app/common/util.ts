export class Utility{
    public static dateToSqlForm(date : Date){
        let month = date.getUTCMonth() + 1; 
        let day =  date.getUTCDate();
        let year = date.getUTCFullYear();

        return  year + "-" + month + "-" + day;
    }
}