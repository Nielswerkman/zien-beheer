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
  private updateModel: User;

  constructor(public UserService: LiveUserService, private route: Router) {
    UserService.getAll()
    .map(users => users.filter(user => user.active === true))
    .subscribe(result => this.users = result);
  }

  ngOnInit() {
  }

  goToEdit(id: number){
    this.route.navigate(['../user/update/', id]);
  }

  disableUser(id: number){
    
    this.updateModel = this.users.filter(
      user => user.id == id,
    )[0]
    this.updateModel.active = false;
    console.log(this.updateModel);
    
    this.UserService.put(this.updateModel).subscribe(res => {
      console.log(res);
   });
    
  }
}
