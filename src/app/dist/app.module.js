"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
////////////////////////////////////////////////////////
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var jwt_interceptor_1 = require("./interceptor/jwt.interceptor");
////////////////////////////////////////////////////////
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var login_component_1 = require("./components/login/login.component");
var main_component_1 = require("./components/main/main.component");
var main_upload_component_1 = require("./components/main-upload/main-upload.component");
var animations_1 = require("@angular/platform-browser/animations");
/////////////////////////////////////////////////////////
var dialog_1 = require("@angular/material/dialog");
var input_1 = require("@angular/material/input");
var company_component_1 = require("./components/company/company.component");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                main_component_1.MainComponent,
                main_upload_component_1.MainUploadComponent,
                company_component_1.CompanyComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                http_1.HttpClientJsonpModule,
                animations_1.BrowserAnimationsModule,
                dialog_1.MatDialogModule,
                input_1.MatInputModule
            ],
            providers: [
                { provide: http_1.HTTP_INTERCEPTORS, useClass: jwt_interceptor_1.JwtInterceptor, multi: true },
                { provide: dialog_1.MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: false } }
            ],
            entryComponents: [
                company_component_1.CompanyComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
