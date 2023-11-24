import { Component } from '@angular/core';
import { LoginService } from "./login.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    constructor(private router:Router) {};

    goToPage(route:string) {
        this.router.navigate([route]);
    }
}
