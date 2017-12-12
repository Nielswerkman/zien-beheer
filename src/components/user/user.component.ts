import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {LiveUserService} from '../../services/UserService/LiveUserService';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public users: User[] = [];

  constructor(public UserService: LiveUserService) {
    UserService.getAll().subscribe(result => this.users = result);
  }

  ngOnInit() {
  }
}
