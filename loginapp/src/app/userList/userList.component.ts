import {Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './userList.service';

@Component({
    selector:'app-userList',
    templateUrl:'./userList.component.html'
})

export class UserListComponent implements OnInit {

    constructor(
        private users:UserService,
        private router: Router
    ){}

    userList:any[]= [];

    ngOnInit(): void{
        this.users.userList()
            .subscribe((res:any[]) => this.userList = res)
    }

    logoutUser():void{
        localStorage.removeItem('Token_Number');
        localStorage.removeItem('Role_Type')
        this.router.navigate(['/login'])
    }

}