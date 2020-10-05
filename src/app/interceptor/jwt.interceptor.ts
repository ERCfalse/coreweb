import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalstorageServiceService } from '../services/localstorage-service.service';
import * as configUrl from '../../assets/config.json';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private ls : LocalstorageServiceService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to the api url
        const user = this.ls.get("token")
        //const isLoggedIn = user && user.jwtToken;
        const isApiUrl = request.url
        if (user && isApiUrl != configUrl.authJwt) {
            request = request.clone({
                setHeaders: { Authorization: `Bearer ${user}` }
            });
        }

        return next.handle(request);
    }
}