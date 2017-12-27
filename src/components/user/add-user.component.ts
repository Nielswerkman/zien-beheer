import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { Component } from "@angular/core";
import { LiveUserService } from "services/UserService/LiveUserService";
import { User } from "models/user";
import { Router } from "@angular/router";

@Component({
    selector: 'add-user',
    templateUrl: './add-user.component.html',
    styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

    model = new User(0, "", "", "", "", "", "", true, false);

    constructor(private userService: LiveUserService, private router: Router) {}

    ngOnInit() {
    }

    postUser() {
        console.log("posted")
        this.userService.post(this.model)
            .subscribe(res => console.log(res));
        this.router.navigate(['user']);
    }

}
