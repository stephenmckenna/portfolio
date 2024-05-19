import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {ScrollIndicatorComponent} from "./scroll-indicator/scroll-indicator.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    ScrollIndicatorComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
