import { NavbarItem, NavbarItemsGQL } from './../graphql/generated';
import { Component, OnInit } from '@angular/core';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { NavbarItemsQuery } from '../graphql/generated';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  navbarItems: Observable<NavbarItemsQuery['navbarItems']>;
  constructor(navbarItemsGQL: NavbarItemsGQL) {
    this.navbarItems = navbarItemsGQL
      .watch()
      .valueChanges.pipe(map((result) => result.data.navbarItems));
  }

  ngOnInit(): void {}

  isNavOpen = false;
  faBars = faBars;
  faXmark = faXmark;

  handleNav() {
    this.isNavOpen = !this.isNavOpen;
  }
}
