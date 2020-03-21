import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-test';

  constructor(private router: Router) {
  }

  loadContent(page: number): void {
    console.log('clicked! Now routing you to your page...');
    if (page === 1) {
      this.router.navigate(['/test-component']);
    } else if (page === 2) {
      this.router.navigate(['/home-Component']);
    }
  }
}
