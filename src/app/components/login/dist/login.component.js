"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var angular_jwt_1 = require("@auth0/angular-jwt");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(service, router, ls, local) {
        this.service = service;
        this.router = router;
        this.ls = ls;
        this.local = local;
        this.login = "";
        this.password = "";
        this.helper = new angular_jwt_1.JwtHelperService();
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.ls.get("token")) {
            this.router.navigate(['/main']);
        }
    };
    LoginComponent.prototype.buttonAction = function () {
        var _this = this;
        this.service.getToken(this.login, this.password).subscribe(function (jwt) {
            var json = jwt;
            var token = json["token"];
            var _idk = json["id"];
            var decodedToken = _this.helper.decodeToken(token);
            var exp = _this.helper.getTokenExpirationDate(token);
            console.log(decodedToken);
            _this.ls.set("token", token);
            _this.ls.set("idk", _idk);
            _this.local.getUserData().then(function (data) {
                console.log('1) ' + data);
                _this.router.navigate(['/main']);
            });
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.sass']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
