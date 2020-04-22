import { Component, OnInit } from '@angular/core';

// import * as login from '../login.json';
// import { LoginServiceService } from '../login-service.service.js';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // constructor(private servicename:LoginServiceService) { }

  ngOnInit(): void {
    // this.servicename.getdata().subscribe(data=>this.logindetails=data)
  }

  username=''
  password=''


  //logindetails:any=(login as any).default;
  onSubmit()
  {
    
   
      if(this.username=="naveen" && this.password=="12345")
      {
        location.replace("home");
       
      }
      
    else
    {
      alert('invalid username & password')
    }
  }

}
