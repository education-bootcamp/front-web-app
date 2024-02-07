import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {MainHeaderComponent} from "./core/main-header/main-header.component";
import {MainFooterComponent} from "./core/main-footer/main-footer.component";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MainHeaderComponent, MainFooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'front-web-app';
}
