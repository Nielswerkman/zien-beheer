import {Component, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {LiveUserService} from '../../services/UserService/LiveUserService';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  public users: User[] = [];

  constructor(public UserService: LiveUserService) {
    UserService.getAll().subscribe(result => this.users = result);
  }

  ngOnInit() {
  }
}
