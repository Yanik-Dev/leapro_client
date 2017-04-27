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
            update: baseUrl+"",
            search: baseUrl+"clients/",
            resident: {
                areas: baseUrl+""
            },
            commercial: {
                areas: baseUrl+""
            }
     },
     JOB: {
            get: baseUrl+"jobs",
            findOne: baseUrl+"jobs/",
            insert: baseUrl+"jobs/create",
            update: baseUrl+""
     },
     PRODUCT: {
            get: baseUrl+"products",
            insert: baseUrl+"products",
            update: baseUrl+"products/",
            search: baseUrl+"products/search"
     },
     SERVICE: {
            get: baseUrl+"services",
            insert: baseUrl+"services",
            update: baseUrl+"services/",
            search: baseUrl+"services/search"
     }

}