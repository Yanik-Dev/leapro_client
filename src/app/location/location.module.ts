import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from 'clarity-angular';

import { LocationService } from './location.service';
import { LocationFormComponent } from './location-form.component';
import { LocationListComponent } from './location-list.component';
import { LocationDetailsComponent } from './location-details.component';

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, ClarityModule],
    exports: [LocationFormComponent, LocationListComponent, LocationDetailsComponent],
    declarations: [LocationFormComponent, LocationListComponent, LocationDetailsComponent],
    providers: [LocationService]
})
export class LocationModule{}