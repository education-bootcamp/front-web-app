import {Component} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {AuthService} from "../../../modules/utility/services/auth/auth.service";
import {response} from "express";
import {CookieManagerService} from "../../../modules/utility/services/cookies/cookie-manager.service";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

  constructor(private authService: AuthService, private cookieService:CookieManagerService, private router:Router) {
  }

  login() {
    this.authService.getToken().subscribe(response => {
      this.cookieService.createToken(response.data);
      this.router.navigateByUrl('/');
    })
  }

}
