import { Routes } from "@angular/router";


import { LoginComponent } from '../login/login.component';
import { HomeComponent } from '../home/home/home.component';
import { SystemOutletComponent } from '../home/system-outlet/system-outlet.component';
import { SystemManagementComponent } from '../home/system-management/system-management.component';
import { UserManagementComponent } from '../home/user-management/user-management.component';
import { AccountManagementComponent } from '../home/account-management/account-management.component';
import { HomeContentComponent } from '../home/home-content/home-content.component';
import { ClientHomeComponent } from '../client/client-home/client-home.component';
import { ClientProfileComponent } from '../client/client-profile/client-profile.component';
import { ClientOutletComponent } from '../client/client-outlet/client-outlet.component';
import { NewClientFormComponent } from '../client/new-client-form/new-client-form.component';
import { JobHomeComponent } from '../job/job-home/job-home.component';
import { ClientFormComponent } from '../client/client-form/client-form.component';
import { NotificationComponent } from '../notification/notification.component';
import { JobHolderComponent } from '../job/job-holder/job-holder.component';
import { JobFormComponent } from '../job/job-form/job-form.component';
import { JobPreviewComponent } from '../job/job-preview/job-preview.component';
import { GoogleCalendarComponent } from '../google-api/google-calendar/google-calendar.component';
import { GoogleMailComponent } from '../google-api/google-mail/google-mail.component';

export const routes: Routes = [
    { path:'', redirectTo: 'login', pathMatch: 'full'},
    { path:'login', component: LoginComponent},
    { path:'app', 
        component: HomeComponent,
        children:[
            { path:'client',  component: ClientOutletComponent,
              children: [
                   { path: '', redirectTo: '/app/client/home', pathMatch: 'full' },
                   { path: 'home', component: ClientHomeComponent },
                   { path:'profile/:id',  component: ClientProfileComponent},
                   { path:'new-client', component: NewClientFormComponent }
                 ]
                
            },
            { path:'notification',  component: NotificationComponent},
            { path:'event-calendar',  component: GoogleCalendarComponent},
            { path:'gmail',  component: GoogleMailComponent},
            { path:'job',  
              component: JobHomeComponent,
              children:[
                  { path:'', redirectTo: '/app/job/view', pathMatch: 'full' },
                  { path:'view',  component: JobHolderComponent},
                  { path:'form',  component: JobFormComponent},
                  { path:'preview/:id',  component: JobPreviewComponent},
              ]
            },
            { path:'content',  component: HomeContentComponent},
            { path:'system',  component: SystemOutletComponent,
              children:[
                  { path: '', redirectTo:'/app/system/system-configuration', pathMatch:'full' },
                  { path: 'system-configuration', component: SystemManagementComponent },
                  { path: 'user-management', component: UserManagementComponent },
                  { path: 'account-settings', component: AccountManagementComponent },
              ]
            },
        ]

     },
     
	{ path:'**', component: LoginComponent }
]
