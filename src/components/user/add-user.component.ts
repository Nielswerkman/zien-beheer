import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'models/user';

import { LiveUserService } from 'services/UserService/LiveUserService';

@Component({
    selector: 'app-add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

    model = new User(0, '', '', '', '', '', '', true, false);

    constructor(private userService: LiveUserService, private router: Router) {}

    ngOnInit() {
    }

    postUser() {
        this.userService.post(this.model).subscribe();
        this.router.navigate(['user']);
    }

}
