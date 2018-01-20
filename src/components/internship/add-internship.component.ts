import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';

import { Institution } from 'models/institution';
import { Internship } from 'models/Internship';
import { InternshipRoute } from 'models/internshipRoute';
import { User } from 'models/user';
import { Blog } from 'models/blog';

import { LiveInstitutionService } from 'services/InstitutionService/LiveInstitutionService';
import { LiveUserService } from 'services/UserService/LiveUserService';
import { LiveInternshipService } from 'services/InternshipService/LiveInternshipService';
import { LiveInternshipRouteService } from 'services/InternshipRouteService/LiveInternshipRouteService';

@Component({
    selector: 'app-add-internship',
    templateUrl: './add-internship.component.html'
})
export class AddInternshipComponent implements OnInit {

    private institutions: Institution[];
    private users: User[];
    private routes: InternshipRoute[];

    internship: Internship;

    name = '';
    type = '';
    summary = '';
    dateStart = null;
    dateEnd = null;
    institution = null;
    user = null;
    route = null;

    constructor(private internshipService: LiveInternshipService, private institutionService: LiveInstitutionService,
        private userService: LiveUserService, private routeService: LiveInternshipRouteService, private router: Router) { }

    ngOnInit() {
        if (localStorage.getItem('currentUser') === 'null') {
            this.router.navigate(['/login'])
        }
        this.institutionService.getAll()
            .map(insts => insts.filter(inst => inst.active === true))
            .subscribe(res => {
                this.institutions = res;
            })

        this.userService.getAll()
            .map(users => users.filter(user => user.active === true))
            .subscribe(res => {
                this.users = res;
            })

        this.routeService.getAll()
            .map(routes => routes.filter(route => route.active === true))
            .subscribe(res => {
                this.routes = res;
            })
    }

    postInternship() {
        this.internship = new Internship();
        this.internship.title = this.type + ': ' + this.name;
        this.internship.summary = this.summary;
        this.internship.startDate = this.dateStart;
        this.internship.endDate = this.dateEnd;
        this.internship.institution = this.institution;
        this.internship.internshipRoute = this.route;
        this.internship.semester = 5;
        this.internship.user = this.user;

        const blog = new Blog();
        blog.creator = this.user;
        this.internship.blog = blog;

        this.internshipService.post(this.internship).subscribe()
        this.router.navigate(['internship']);
    }
}
