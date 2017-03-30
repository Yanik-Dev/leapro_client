import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ClarityModule } from 'clarity-angular';
import { routes } from '../route/router.routes';
import { MainDashboardComponent } from './main-dashboard.component';
import { CircleModule } from '../tally-circle/circle.module';



import { ChartsModule } from 'ng2-charts/ng2-charts';
@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes),
        ClarityModule,
        ChartsModule,
        CircleModule
    ],
    exports: [MainDashboardComponent],
    declarations: [MainDashboardComponent]
})
export class DashboardModule{}