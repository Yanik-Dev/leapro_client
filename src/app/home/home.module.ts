import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ClarityModule } from 'clarity-angular';
import { routes } from '../route/router.routes';
import { HomeComponent } from './home/home.component';
import { HomeContentComponent } from './home-content/home-content.component';
import { SystemOutletComponent } from './system-outlet/system-outlet.component';
import { SystemManagementComponent } from './system-management/system-management.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { AccountManagementComponent } from './account-management/account-management.component';

import { ClientModule } from '../client/client.module';
import { ContactModule } from '../contact/contact.module';
import { LocationModule } from '../location/location.module';
import { LoginModule } from '../login/login.module';
import { JobModule } from '../job/job.module';
import { ServiceModule } from '../service/service.module';
import { UnitModule } from '../unit/unit.module';
import { ProductModule } from '../product/product.module';
import { SearchFilterModule } from '../search-filter/search-filter.module';
import { DashboardModule } from '../dashboard/dashboard.module';
import { NotificationModule } from '../notification/notification.module';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { UserModule } from '../user/user.module';
import { GoogleApiModule } from '../google-api/google-api.module';
@NgModule({
    imports: [
        BrowserModule,
        GoogleApiModule,
        RouterModule.forRoot(routes),
        ClarityModule.forRoot(),
        ClientModule,
        UserModule,
        JobModule,
        ContactModule,
        LocationModule,
        ServiceModule,
        SearchFilterModule,
        LoginModule,
        DashboardModule, 
        UnitModule,
        ProductModule,
        NotificationModule
    ],
    exports: [  
        HomeComponent, 
        HomeContentComponent,
        SystemManagementComponent,
        UserManagementComponent,
        AccountManagementComponent,
        SystemOutletComponent
    ],
    declarations: [
        HomeComponent, 
        HomeContentComponent,
        SystemOutletComponent, 
        SystemManagementComponent, 
        UserManagementComponent,
        AccountManagementComponent,
        AccountSettingsComponent
    ]
})
export class HomeModule{}