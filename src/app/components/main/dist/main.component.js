"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MainComponent = void 0;
var core_1 = require("@angular/core");
var MainComponent = /** @class */ (function () {
    function MainComponent(ls, ws, rs, local) {
        this.ls = ls;
        this.ws = ws;
        this.rs = rs;
        this.local = local;
    }
    MainComponent.prototype.ngOnInit = function () {
        this.ws.getWebSocketObservible().subscribe(function (data) {
            console.log(data);
        });
        // var user = this.local.getUserData().then(
        //   (userData) => 
        //   {
        //     console.log(userData)
        //   }
        // )
        // if(this.ls.get("user") == undefined || this.ls.get("user") == null){
        // this.rs.getUser().subscribe(
        //   (data) => 
        //   {
        //      this.ls.set("user",data)
        //   }
        // )
        //}
    };
    MainComponent.prototype.sendToSocket = function () {
        if (this.ws.ws.readyState == this.ws.ws.OPEN) {
            this.ws.sendMessage("Hi from angular!");
        }
        else {
            alert("Socket not Connect");
        }
    };
    MainComponent = __decorate([
        core_1.Component({
            selector: 'app-main',
            templateUrl: './main.component.html',
            styleUrls: ['./main.component.sass']
        })
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
