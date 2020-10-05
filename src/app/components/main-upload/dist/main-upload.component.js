"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MainUploadComponent = void 0;
var core_1 = require("@angular/core");
var company_component_1 = require("../company/company.component");
var MainUploadComponent = /** @class */ (function () {
    function MainUploadComponent(rs, ls, local, ws, dialog) {
        this.rs = rs;
        this.ls = ls;
        this.local = local;
        this.ws = ws;
        this.dialog = dialog;
        this.company = [];
    }
    MainUploadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.webso = this.ws.getWebSocketObservible();
        this.webso.subscribe(function (data) {
            console.log("in component ws send: " + data);
            try {
                _this.result = JSON.parse(data);
            }
            catch (_a) {
                _this.result = "error";
            }
        });
        // var user = this.ls.get('user')
        // this.userName = user[0].name
        //console.log(user)
        this.rs.getUser().subscribe(function (value) {
            _this.userName = value[0].name;
            console.log(_this.userName);
            _this.company.push(value[0].company[0]);
            console.log(value[0].company[0]);
        });
        //this.getUserData()
    };
    MainUploadComponent.prototype.ngOnDestroy = function () {
        this.webso.unsubscribe();
    };
    MainUploadComponent.prototype.send = function () {
        var formData = new FormData();
        formData.append("filedata", this.file, this.file.filename);
        this.rs.postFile(formData).subscribe(function (value) {
            console.log(value);
            alert(JSON.parse(JSON.stringify(value)).status);
        });
        //
    };
    MainUploadComponent.prototype.handleLogoFileInput = function (files) {
        this.file = files[0];
    };
    MainUploadComponent.prototype.getUser = function () {
        var userret;
        this.rs.getUser().subscribe(function (value) {
            return value;
        });
        //return userret
    };
    MainUploadComponent.prototype.getUserData = function () {
        var _this = this;
        this.local.getUserData().then(function (userData) {
            console.log(userData);
            if (userData) {
                _this.userName = userData[0].name;
            }
            else {
                console.log("no user data");
                // this.getUserData()
            }
        });
    };
    MainUploadComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog.open(company_component_1.CompanyComponent, {
            width: '640px'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log("Dialog result: " + result);
        });
    };
    MainUploadComponent.prototype.startGis = function () {
        this.rs.gis(this.company[0].gisId).subscribe();
    };
    MainUploadComponent = __decorate([
        core_1.Component({
            selector: 'app-main-upload',
            templateUrl: './main-upload.component.html',
            styleUrls: ['./main-upload.component.sass']
        })
    ], MainUploadComponent);
    return MainUploadComponent;
}());
exports.MainUploadComponent = MainUploadComponent;
