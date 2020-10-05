import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
//////////////////////////////////////////////////
import * as configUrl from '../../assets/config.json';

@Injectable({
  providedIn: 'root'
})
export class RootServiceService {
  


  constructor(private http : HttpClient) { }

  public getToken(username,password)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    //return this.http.get(configUrl.authJwt+"?username="+username+"&password="+password)
    const body = { login: username, password: password }
    console.log(body)
    return this.http.post(configUrl.authJwt,body,httpOptions)
  }

  public postFile(body)
  {
    
    return this.http.post(configUrl.uploadUrl,body)
  }

  public getUser()
  {
    return this.http.get(configUrl.userUrl)
  }

  public sendWithBody(body)
  {
    return this.http.get("")
  }

  public gis(gisid)
  {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    const body = { gis: gisid , action: "companyStart" }
    return this.http.post(configUrl.gisUrl,body,httpOptions)
  }
}
