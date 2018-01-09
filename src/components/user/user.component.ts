import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {LiveUserService} from '../../services/UserService/LiveUserService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public users: User[] = [];

  constructor(public UserService: LiveUserService, private route: Router) {
    UserService.getAll().subscribe(result => this.users = result);
  }

  ngOnInit() {
  }

  goToEdit(id: number){
    this.route.navigate(['../user/update/', id]);
  }
}
