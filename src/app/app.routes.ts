import { Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home/home-page/home-page.component";
import {NotFoundPageComponent} from "./core/not-found-page/not-found-page.component";
import {ProductPageComponent} from "./pages/product/product-page/product-page.component";
import {ProductViewPageComponent} from "./pages/product/product-view-page/product-view-page.component";
import {LoginPageComponent} from "./pages/security/login-page/login-page.component";
import {SignupPageComponent} from "./pages/security/signup-page/signup-page.component";
import {ForgotPasswordPageComponent} from "./pages/security/forgot-password-page/forgot-password-page.component";
import {OtpVerificationPageComponent} from "./pages/security/otp-verification-page/otp-verification-page.component";
import {ResetPasswordPageComponent} from "./pages/security/reset-password-page/reset-password-page.component";

export const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomePageComponent},
  {path:'products', component:ProductPageComponent},
  {path:'product-details/:id', component:ProductViewPageComponent},
  {path:'login', component:LoginPageComponent},
  {path:'signup', component:SignupPageComponent},
  {path:'forgot-password', component:ForgotPasswordPageComponent},
  {path:'otp-verification', component:OtpVerificationPageComponent},
  {path:'reset-password', component:ResetPasswordPageComponent},
  {path:'**', component:NotFoundPageComponent}
];
