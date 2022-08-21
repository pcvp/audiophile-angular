import { Component, OnInit } from '@angular/core';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  isNavOpen = false;
  faBars = faBars;
  faXmark = faXmark;

  handleNav() {
    this.isNavOpen = !this.isNavOpen;
  }
}
