import { Component } from '@angular/core';
import { AuthService } from '../user/auth.service';

@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.component.html',
    styles: [`
        .nav.navbar-nav { font-size: 15px;}
        li > a.active { color: orange }
        #searchForm { margin-right: 100px; }
        @media (max-width:1200px) { #searchForm { display:none } }
    `]

})
export class NavBarComponent {
    private auth:AuthService;

    constructor(authParam: AuthService) {
        this.auth = authParam;
    }
    
}
