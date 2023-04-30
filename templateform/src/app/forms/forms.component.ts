import { Component, OnInit } from '@angular/core';
import { IUser } from './form.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor() { }
  language:string[] = ['Node','React','Angular','JavaScript']
  myEmployee = new IUser('','','','','');
  hasCodeLangError:boolean = false;

  ngOnInit(): void {
  }

  validateCodeLang():void{
    if(this.myEmployee.clang === 'default'){
      this.hasCodeLangError = true
    }else{
      this.hasCodeLangError = false
    }
  }

  firstToUpper(value:string):void{
    if(value.length>0){
      value = value.trim()
      this.myEmployee.firstName = value.charAt(0).toUpperCase()+value.slice(1).toLowerCase();
    }else{
      this.myEmployee.firstName = value
    }
  }

  showPassword(event:Event):void{
    console.log((event.target as HTMLInputElement).type)
    // let inputType = (event.target as HTMLInputElement).type)
    let inputType = (event.target as HTMLInputElement).type
    if(inputType === "password"){
      (event.target as HTMLInputElement).type= 'text'
    }else{
      (event.target as HTMLInputElement).type= 'password'
    }
  }
}
