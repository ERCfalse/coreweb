"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LocalstorageServiceService = void 0;
var core_1 = require("@angular/core");
var LocalstorageServiceService = /** @class */ (function () {
    function LocalstorageServiceService() {
        this.localStorage = window.localStorage;
    }
    LocalstorageServiceService.prototype.get = function (key) {
        if (this.isLocalStorageSupported) {
            return JSON.parse(this.localStorage.getItem(key));
        }
        return null;
    };
    LocalstorageServiceService.prototype.set = function (key, value) {
        if (this.isLocalStorageSupported) {
            this.localStorage.setItem(key, JSON.stringify(value));
            return true;
        }
        return false;
    };
    LocalstorageServiceService.prototype.remove = function (key) {
        if (this.isLocalStorageSupported) {
            this.localStorage.removeItem(key);
            return true;
        }
        return false;
    };
    Object.defineProperty(LocalstorageServiceService.prototype, "isLocalStorageSupported", {
        get: function () {
            return !!this.localStorage;
        },
        enumerable: false,
        configurable: true
    });
    LocalstorageServiceService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], LocalstorageServiceService);
    return LocalstorageServiceService;
}());
exports.LocalstorageServiceService = LocalstorageServiceService;
