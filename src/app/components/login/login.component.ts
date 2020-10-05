import { Component, OnInit } from '@angular/core';
import { RootServiceService } from '../../services/root-service.service';
import { LocalstorageServiceService } from '../../services/localstorage-service.service';
import  { JwtHelperService }  from  "@auth0/angular-jwt";
import { Router } from '@angular/router';
import { LocalServiceService } from '../../services/local-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  login = "";
  password = "";
  helper = new JwtHelperService();


  constructor(private service : RootServiceService,private router: Router,private ls : LocalstorageServiceService,private local : LocalServiceService) { }

  ngOnInit() {
    if(this.ls.get("token"))
    {
      this.router.navigate(['/main'])
    }
  }

  buttonAction()
  {
    this.service.getToken(this.login,this.password).subscribe(
      jwt => {
      var json = jwt as JSON;  
      var token = json["token"];
      var _idk = json["id"];
      var decodedToken = this.helper.decodeToken(token)
      var exp = this.helper.getTokenExpirationDate(token)
      console.log(decodedToken);
      this.ls.set("token",token);
      this.ls.set("idk",_idk);
      this.local.getUserData().then((data) =>
      {
      console.log('1) '+data)
      this.router.navigate(['/main'])
      }) 
          
      }
    )
    
  }

}
