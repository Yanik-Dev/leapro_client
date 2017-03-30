import { NgModule } from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { CircleComponent } from './circle.component';


@NgModule({
    imports: [
       BrowserModule, 
     ],
    exports: [CircleComponent],
    declarations:[CircleComponent]
})
export class CircleModule{
    
}