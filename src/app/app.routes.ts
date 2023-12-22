import { Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home/home-page/home-page.component";
import {NotFoundPageComponent} from "./core/not-found-page/not-found-page.component";
import {ProductPageComponent} from "./pages/product/product-page/product-page.component";
import {ProductViewPageComponent} from "./pages/product/product-view-page/product-view-page.component";

export const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomePageComponent},
  {path:'products', component:ProductPageComponent},
  {path:'product-details/:id', component:ProductViewPageComponent},
  {path:'**', component:NotFoundPageComponent}
];
