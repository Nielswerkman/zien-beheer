import {Component, OnInit} from '@angular/core';
import {MockUserService} from '../../services/UserService/MockUserService';
import {User} from '../../models/user';
import {LiveUserService} from '../../services/UserService/LiveUserService';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  public users: User[] = [];

  constructor(public userDB: LiveUserService) {
    userDB.getAll().subscribe(result => this.users = result);
  }

  ngOnInit() {
  }
}
