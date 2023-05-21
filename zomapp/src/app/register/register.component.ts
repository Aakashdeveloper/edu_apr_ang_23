import { Component, OnInit } from '@angular/core';
import { IRegister } from './register.model';
import { NgForm } from '@angular/forms';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  constructor(private registerService: RegisterService,
      private router: Router) { }
  myEmployee = new IRegister('Amit','amit@gmail.com','12345678','9876543211');

  ngOnInit(): void {
  }


  submitForm(Form:NgForm):void{
    console.log(Form.value)
    this.registerService.registerEmp(Form.value)
    .subscribe((res:any[]) => {console.log(`Form Submitted`)})
    this.router.navigate(['/login'])
  }
}
