import { Component, OnInit } from '@angular/core';
import { ILogin,LoginRes,userRes } from './login.model';
import { NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(
      private loginService: LoginService,
      private router: Router) { }

  myEmployee = new ILogin('pinkesh@example.com','12345678');
  loginError:string = ''

  ngOnInit(): void {
  }


  submitForm(Form:NgForm):void{
    console.log(Form.value)
    this.loginService.loginEmp(Form.value)
    .subscribe((res:LoginRes) => {
      this.loginError = '';
      this.loginService.getUserInfo(res['token'])
        .subscribe((response:userRes) => {
          //console.log(">>response>>",response)
          this.validateUser(response['role'],response['name'],
          response['email'],response['phone'])
        })
      console.log(`Form Submitted`)
    },
      (err:any[]) =>{
        this.loginError = "Please Enter Valid Information"
      }
    )
  }


  validateUser(roleType:string,name:string,email:string,phone:string):void{
    let userResponse = `${roleType},${name},${email},${phone}`
    localStorage.setItem('userResponse',userResponse);
    localStorage.setItem('Role_Type',roleType);
    this.router.navigate(['/'])
  }
}
