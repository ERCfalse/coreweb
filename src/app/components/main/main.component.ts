import { Component, OnInit } from '@angular/core';
import { LocalstorageServiceService } from '../../services/localstorage-service.service';
import { WebSocketServiceService } from '../../services/web-socket-service.service';
import { RootServiceService } from '../../services/root-service.service';
import { LocalServiceService } from '../../services/local-service.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  

  constructor(private ls: LocalstorageServiceService
    ,private ws: WebSocketServiceService
    ,private rs: RootServiceService,private local : LocalServiceService) { }

  ngOnInit() {
    this.ws.getWebSocketObservible().subscribe(
    (data) => {
      console.log(data)
    }  
    )
    // var user = this.local.getUserData().then(
    //   (userData) => 
    //   {
    //     console.log(userData)
    //   }
    // )
     
    // if(this.ls.get("user") == undefined || this.ls.get("user") == null){
    // this.rs.getUser().subscribe(
    //   (data) => 
    //   {
    //      this.ls.set("user",data)
    //   }
    // )
    //}
  }

  sendToSocket(){
    if(this.ws.ws.readyState == this.ws.ws.OPEN){  
      this.ws.sendMessage("Hi from angular!")
    }else{
      alert("Socket not Connect")
    }
  }
}
