import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'models/user';

import { LiveUserService } from 'services/UserService/LiveUserService';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {
  public users: User[] = [];
  private updateModel: User;

  constructor(private UserService: LiveUserService, private route: Router) {
  }

  ngOnInit() {
    this.UserService.getAll()
      .map(users => users.filter(user => user.active === true))
      .subscribe(result => {
        this.users = result,
        console.log(result)
      });
  }

  goToEdit(id: number) {
    this.route.navigate(['../user/update/', id]);
  }

  disableUser(id: number) {
    this.updateModel = this.users.filter(
      user => user.id === id,
    )[0]
    this.updateModel.active = false;

    this.UserService.put(this.updateModel).subscribe();
  }
}
