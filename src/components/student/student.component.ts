import {Component, OnInit} from '@angular/core';
import {MockUserService} from '../../services/UserService/MockUserService';
import {User} from '../../models/user';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  public users: User[] = [];

  constructor(private userDB: MockUserService) {
    this.users = userDB.getAll();
  }

  ngOnInit() {
  }
}
