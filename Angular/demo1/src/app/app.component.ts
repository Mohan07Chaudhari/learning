import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Mohan';

  routesList = ['stage1', 'stage2', 'stage3', 'stage4', 'stage5', 'stage6'];
  currentRouteIndex = 0;

  constructor(private router: Router) {
  }

  public handlePrevious() {
    if (this.currentRouteIndex <= 0) {
      this.currentRouteIndex = this.routesList.length;
    }

    this.currentRouteIndex--;

    this.router.navigate([this.routesList[this.currentRouteIndex]]);    
  }

  public handleNext() {
    if (this.currentRouteIndex >= this.routesList.length - 1) {
      this.currentRouteIndex = -1;
    }

    this.currentRouteIndex++;

    this.router.navigate([this.routesList[this.currentRouteIndex]]);
  }
}
