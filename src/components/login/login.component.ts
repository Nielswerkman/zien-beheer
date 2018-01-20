import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'models/user';

import { LiveUserService } from 'services/UserService/LiveUserService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private user: User

  email: String = '';
  password: String = '';

  constructor(private userService: LiveUserService, private router: Router) { }

  ngOnInit() { }

  loginUser() {
    this.userService.login(this.email, this.password).subscribe(res => {
      this.user = res;
      console.log(this.user);
      if (this.user.moderator === true) {
        localStorage.setItem('currentUser', JSON.stringify(this.user));
        this.router.navigate(['/']);
      } else {
        alert('Deze gebruiker is geen administrator.');
      }
    });
  }
}
