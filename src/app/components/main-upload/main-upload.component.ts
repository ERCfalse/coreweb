import { Component, OnInit , OnDestroy } from '@angular/core';
import { RootServiceService } from '../../services/root-service.service';
import { WebSocketServiceService } from '../../services/web-socket-service.service';
import { RouteReuseStrategy } from '@angular/router';
import { LocalstorageServiceService } from '../../services/localstorage-service.service';
import { LocalServiceService } from '../../services/local-service.service';
import { MatDialog } from '@angular/material/dialog';
import { CompanyComponent } from "../company/company.component";

@Component({
  selector: 'app-main-upload',
  templateUrl: './main-upload.component.html',
  styleUrls: ['./main-upload.component.sass']
})
export class MainUploadComponent implements OnInit,OnDestroy {
  userName;
  file;
  company = [];
  webso;
  result;

  constructor(private rs :  RootServiceService,
    private ls : LocalstorageServiceService,
    private local:LocalServiceService,
    private ws:WebSocketServiceService,
    public dialog: MatDialog){}
    
  ngOnInit() {
this.webso = this.ws.getWebSocketObservible()
this.webso.subscribe(
      (data) => {
        console.log("in component ws send: "+data)
        try{
        this.result = JSON.parse(data)
        }catch{
          this.result = "error";
        }
      }
    )

  // var user = this.ls.get('user')
  // this.userName = user[0].name
  
  //console.log(user)
    this.rs.getUser().subscribe((value) => {
      this.userName = value[0].name
      console.log(this.userName)
      this.company.push(value[0].company[0])
      console.log(value[0].company[0])
     })
   
    //this.getUserData()
  }


  ngOnDestroy(){
    this.webso.unsubscribe()
  }

  send()
  {
    const formData: FormData = new FormData();
    formData.append("filedata",this.file,this.file.filename)
    this.rs.postFile(formData).subscribe(value => {
      console.log(value)
      alert(JSON.parse(JSON.stringify(value)).status)
    })
    //
  }

  handleLogoFileInput(files: FileList) {
    this.file = files[0];
  }

  getUser(){
    var userret
     this.rs.getUser().subscribe((value) => {
     return value
    })
    //return userret
  }

  getUserData()
  {
    this.local.getUserData().then(
      (userData) => 
      {
        console.log(userData)
        if(userData){
        this.userName = userData[0].name
        }else{
          console.log("no user data")
         // this.getUserData()
        }
      }
    )
  }

  openDialog() {
    const dialogRef = this.dialog.open(CompanyComponent,{
      width: '640px',

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  startGis()
  {
    this.rs.gis(this.company[0].gisId).subscribe()
  }
}
