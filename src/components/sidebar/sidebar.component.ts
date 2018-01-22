import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'models/user';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  currentAdmin: User;

  constructor(private router: Router) { }

  ngOnInit() {
    this.currentAdmin = JSON.parse(localStorage.getItem('currentAdmin'));
  }

  logoutUser() {
    localStorage.setItem('currentAdmin', null);
    this.router.navigate(['/login']);
  }
}
