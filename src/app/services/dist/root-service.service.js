"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RootServiceService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
//////////////////////////////////////////////////
var configUrl = require("../../assets/config.json");
var RootServiceService = /** @class */ (function () {
    function RootServiceService(http) {
        this.http = http;
    }
    RootServiceService.prototype.getToken = function (username, password) {
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        //return this.http.get(configUrl.authJwt+"?username="+username+"&password="+password)
        var body = { login: username, password: password };
        console.log(body);
        return this.http.post(configUrl.authJwt, body, httpOptions);
    };
    RootServiceService.prototype.postFile = function (body) {
        return this.http.post(configUrl.uploadUrl, body);
    };
    RootServiceService.prototype.getUser = function () {
        return this.http.get(configUrl.userUrl);
    };
    RootServiceService.prototype.sendWithBody = function (body) {
        return this.http.get("");
    };
    RootServiceService.prototype.gis = function (gisid) {
        var httpOptions = {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
        var body = { gis: gisid, action: "companyStart" };
        return this.http.post(configUrl.gisUrl, body, httpOptions);
    };
    RootServiceService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], RootServiceService);
    return RootServiceService;
}());
exports.RootServiceService = RootServiceService;
