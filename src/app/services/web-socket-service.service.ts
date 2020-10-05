import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import * as configUrl from '../../assets/config.json';
import { LocalstorageServiceService } from './localstorage-service.service';


@Injectable({
  providedIn: 'root'
})
export class WebSocketServiceService {
  ws: WebSocket;
  
  constructor(private lss : LocalstorageServiceService) {
    if(this.ws == undefined || this.ws == null){
      this.ws = new WebSocket(configUrl.wsUrl+"?cordenator="+this.lss.get("idk"));
    }
   }

  getWebSocketObservible():Observable<any>
    {
      return new Observable(
        observer => {
        this.ws.onmessage = (event) =>
        observer.next(event.data);
        this.ws.onerror = (event) => observer.error(event);
        this.ws.onclose = (event) => observer.complete();
        });
    }  

    
    sendMessage(message: any){
    this.ws.send(message);
    }
}
