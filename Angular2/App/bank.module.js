"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var bank_component_1 = require("./bank.component");
var ViewGrid_component_1 = require("./ViewGrid/ViewGrid.component");
var BankModule = (function () {
    function BankModule() {
    }
    return BankModule;
}());
BankModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule],
        declarations: [bank_component_1.BankComponent, ViewGrid_component_1.ViewGridComponent],
        bootstrap: [bank_component_1.BankComponent]
    })
], BankModule);
exports.BankModule = BankModule;
//# sourceMappingURL=bank.module.js.map