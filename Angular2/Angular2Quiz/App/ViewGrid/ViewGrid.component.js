"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ViewGridComponent = (function () {
    function ViewGridComponent() {
        this.Name = 'Ravi';
        this.Place = 'Pune';
    }
    return ViewGridComponent;
}());
ViewGridComponent = __decorate([
    core_1.Component({
        selector: 'ViewGrid-comp',
        templateUrl: 'App/ViewGrid/ViewGrid.html',
        styleUrls: ['App/ViewGrid/ViewGrid.component.css']
    })
], ViewGridComponent);
exports.ViewGridComponent = ViewGridComponent;
//# sourceMappingURL=ViewGrid.component.js.map