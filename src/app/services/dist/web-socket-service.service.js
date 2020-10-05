"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.WebSocketServiceService = void 0;
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/internal/Observable");
var configUrl = require("../../assets/config.json");
var WebSocketServiceService = /** @class */ (function () {
    function WebSocketServiceService(lss) {
        this.lss = lss;
        if (this.ws == undefined || this.ws == null) {
            this.ws = new WebSocket(configUrl.wsUrl + "?cordenator=" + this.lss.get("idk"));
        }
    }
    WebSocketServiceService.prototype.getWebSocketObservible = function () {
        var _this = this;
        return new Observable_1.Observable(function (observer) {
            _this.ws.onmessage = function (event) {
                return observer.next(event.data);
            };
            _this.ws.onerror = function (event) { return observer.error(event); };
            _this.ws.onclose = function (event) { return observer.complete(); };
        });
    };
    WebSocketServiceService.prototype.sendMessage = function (message) {
        this.ws.send(message);
    };
    WebSocketServiceService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], WebSocketServiceService);
    return WebSocketServiceService;
}());
exports.WebSocketServiceService = WebSocketServiceService;
