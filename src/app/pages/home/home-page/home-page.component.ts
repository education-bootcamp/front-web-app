import { Component } from '@angular/core';
import {MainSliderComponent} from "./inner-items/main-slider/main-slider.component";
import {ProductViewCardComponent} from "../../../share/cards/product-view-card/product-view-card.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MainSliderComponent,
    ProductViewCardComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
