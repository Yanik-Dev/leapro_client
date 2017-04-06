/**
 * stores all the routes for the rest api
 */
let baseUrl = "http://localhost:3000/crm/api/v1/";
export const  ROUTES = {
     UserRegistration : baseUrl+"",
     REGISTER :  baseUrl+"",
     AUTHENTICATE: baseUrl+"",
     CLIENT: {
            get: baseUrl+"clients",
            insert: baseUrl+"clients/create",
            update: baseUrl+""
     },
     PRODUCT: {
            get: baseUrl+"products",
            insert: baseUrl+"products",
            update: baseUrl+""
     },
     SERVICE: {
            get: baseUrl+"services",
     }

}