 
import { Component } from '@angular/core';
 
@Component({
    selector: 'bank-app',
    template: `<div>
<h1>{{pageHeader}}</h1>
<ViewGrid-comp></ViewGrid-comp>
    </div>
    `
})
export class EntryAppComponent
{
    pageHeader:string= 'ABC Bank LTD.'
}