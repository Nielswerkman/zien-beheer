import { OnInit, Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User } from 'models/user';

import { LiveUserService } from 'services/UserService/LiveUserService';

@Component({
    selector: 'app-update-user',
    templateUrl: './update-user.component.html'
})
export class UpdateUserComponent implements OnInit {

    dataLoaded = false;

    id: number;

    model: any;

    constructor(private userService: LiveUserService, private router: Router, private route: ActivatedRoute) { }

    ngOnInit() {
        if (localStorage.getItem('currentUser') === 'null') {
            this.router.navigate(['/login'])
        }
        this.id = this.route.snapshot.params['id'];

        this.userService.get(this.id).subscribe(res => {
            this.model = res;
            this.dataLoaded = true;
        })
    }

    postUser() {
        this.userService.put(this.model).subscribe();
        this.router.navigate(['user'])
    }

}
