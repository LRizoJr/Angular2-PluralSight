import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';


@Component({
    templateUrl: 'app/user/login.component.html',
    styles: [`
        em { float:right; color:red; padding-left:10px; }
    `]
})
export class LoginComponent {
    private authService:AuthService;
    private router:Router;

    constructor(authServ:AuthService,routerParam:Router) {
        this.authService = authServ;
        this.router = routerParam;
    }

    login(formValues) {
        this.authService.loginUser(formValues.userName, formValues.password);
        this.router.navigate(['events']);
    }

    cancel() {
        this.router.navigate(['events']);
    }
}