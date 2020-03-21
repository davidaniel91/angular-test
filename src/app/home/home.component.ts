import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'angular-test';
  check: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  testMethod() {
    if (this.check) {
      this.check = false;
    } else {
      this.check = true;
    }
  }
}
