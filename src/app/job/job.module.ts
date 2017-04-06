import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule }      from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { ClarityModule } from 'clarity-angular';
import { SearchFilterModule } from '../search-filter/search-filter.module';
import { ServiceModule } from '../service/service.module';
import { ProductModule } from '../product/product.module';
import { JobFormComponent } from './job-form/job-form.component';
import { JobHomeComponent } from './job-home/job-home.component';
import { UnitModule } from '../unit/unit.module';
import { AreaModule } from '../area/area.module';
import { FreeInputComponent } from './input-component/input.component';
import { JobPreviewComponent } from './job-preview/job-preview.component';
import { JobGridComponent } from './job-grid/job-grid.component';
import { JobHolderComponent } from './job-holder/job-holder.component';
import {ClientSelectionComponent} from './client-selection/client-selection.component';
import { ScheduleModule } from '../schedule/schedule.module';
import { ClientService } from "../client/client.service";
@NgModule({
    imports: [
       BrowserModule, 
       RouterModule,
       FormsModule, 
       ReactiveFormsModule,
       HttpModule, 
       ScheduleModule,
       JsonpModule, 
       ClarityModule,
       SearchFilterModule,
       ServiceModule,
       UnitModule,
       ProductModule,
       AreaModule
     ],
    exports: [JobFormComponent, JobGridComponent, ClientSelectionComponent, JobPreviewComponent],
    declarations:[
           JobFormComponent, 
           JobHomeComponent,
           JobGridComponent,
           JobPreviewComponent, 
           JobHolderComponent, 
           FreeInputComponent,
           ClientSelectionComponent
    ],
    providers:[ClientService]
})
export class JobModule{
    
}