import { Component } from '@angular/core';
import { LoginService } from '../login/login.service';
import { Router,ActivatedRoute } from '@angular/router';
import { userRes } from '../login/login.model';
import { DetailsService } from '../services/details.service'

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})

export class HeaderComponent{
    constructor(
        private loginService:LoginService,
        private detailService:DetailsService,
        private router:Router,
        private activatedRoute:ActivatedRoute
    ){}

    token:string|null = '';
    siteLogin:string|null = ''
    uid:string|null = ''
    userInfo:userRes = {
        "_id":"",
        "name":"",
        "email":"",
        "phone":"",
        "role":"",
        "__v":0
    }

    loginStatus:boolean = false;

    ngOnInit():void{

        this.activatedRoute.queryParams
        .subscribe((params:any) => {
          console.log(params['site'])
          console.log(params['id'])
          if(params){
            this.siteLogin=params['site']
            this.uid=params['uid']
            this.detailService.getUserDetails(this.uid?this.uid:'')
                .subscribe((res:any[]) => {
                    console.log(res)
                })
          }
          
        })
       
        this.token = localStorage.getItem('Token_Number')?localStorage.getItem('Token_Number'):'';
        this.loginService.getUserInfo(this.token?this.token:'')
        .subscribe((res:userRes) => {
            this.userInfo = res;
            this.loginStatus = true;
        })
    }

    logoutUser():void{
        console.log(">>>",this.activatedRoute.snapshot.queryParamMap.get('site'))
        localStorage.removeItem('Token_Number');
        localStorage.removeItem('userResponse');
        localStorage.removeItem('Role_Type');
        this.loginStatus = false;
        this.siteLogin = "Test";
        this.router.navigate(['/']);
        window.location.reload()
    }
}