import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BankComponent } from './bank.component';
import {ViewGridComponent} from './ViewGrid/ViewGrid.component';
 
@NgModule({
    imports: [ BrowserModule ],
    declarations: [ BankComponent, ViewGridComponent ],
    bootstrap: [ BankComponent ]
})
export class BankModule{ }
 