import { Injectable } from '@angular/core';
import { RootServiceService } from './root-service.service';
import { LocalstorageServiceService } from './localstorage-service.service';
import { timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LocalServiceService {

  constructor(private rs : RootServiceService,private ls : LocalstorageServiceService) { }

  async getUserData() : Promise<any>
  {
    if(this.ls.get("user") != undefined)
    {
      var user = this.ls.get("user")
      return user
    }else{
      await this.rs.getUser().subscribe(
        (data) => 
        {
         if(this.ls.set("user",data)){
          return data        
        }else{
          timeout(20)
          return this.ls.get("user")
        }          
        }
      )
    }
  }
}
