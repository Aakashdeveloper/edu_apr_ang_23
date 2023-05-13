import {Component,OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl} from '@angular/forms';

@Component({
    selector:'app-employee',
    templateUrl:'./empForm.component.html'
})

export class EmployeeComponent implements OnInit{
    employeeForm: FormGroup
    constructor(private fb: FormBuilder) {}

    ngOnInit(): void {
        this.employeeForm = this.fb.group({
            firstName:['John',[Validators.required,Validators.minLength(3)]],
            lastName:['abc',[Validators.minLength(3),Validators.maxLength(8)]],
            email:['a@a.com',[Validators.required,
                Validators.pattern('^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,5})$')]]
        })
    }
}