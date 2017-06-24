import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EntryAppComponent } from './EntryApp.component';
import {ViewGridComponent} from './ViewGrid/ViewGrid.component';
 
@NgModule({
    imports: [ BrowserModule ],
    declarations: [ EntryAppComponent, ViewGridComponent ],
    bootstrap: [ EntryAppComponent ]
})
export class EntryAppModule{ }
 