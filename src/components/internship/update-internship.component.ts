import { OnInit, Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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
    selector: 'app-update-internship',
    templateUrl: './update-internship.component.html'
})
export class UpdateInternshipComponent implements OnInit {

    private institutions: Institution[];
    private users: User[];
    private routes: InternshipRoute[];

    private id: number;

    modelLoaded = false;
    instLoaded = false;
    userLoaded = false;
    routeLoaded = false;

    type: string;
    model: Internship;
    textModel: Internship;

    internship: Internship;


    constructor(private internshipService: LiveInternshipService, private institutionService: LiveInstitutionService,
        private userService: LiveUserService, private routeService: LiveInternshipRouteService, private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit() {
        if (localStorage.getItem('currentAdmin') === 'null') {
            this.router.navigate(['/login'])
        }

        this.id = this.route.snapshot.params['id'];

        this.internshipService.get(this.id).subscribe(res => {
            this.model = res,

                this.textModel = new Internship(null, null, null, null, null, null, null, null, null, null, null);
            this.textModel.internshipRoute = res.internshipRoute;
            this.textModel.internshipRoute.name = res.internshipRoute.name;
            this.textModel.startDate = res.startDate;
            this.textModel.endDate = res.endDate;
            this.textModel.title = res.title;
            this.textModel.institution = res.institution;
            this.textModel.institution.name = res.institution.name;
            this.textModel.user = res.user;
            this.textModel.user.firstName = res.user.firstName;
            this.textModel.user.infix = res.user.infix;
            this.textModel.user.lastName = res.user.lastName;

            this.modelLoaded = true;
        })

        this.institutionService.getAll()
            .map(insts => insts.filter(inst => inst.active === true))
            .subscribe(res => {
                this.institutions = res;
                this.instLoaded = true;
            })

        this.userService.getAll()
            .map(users => users.filter(user => user.active === true && user.moderator === false))
            .subscribe(res => {
                this.users = res;
                this.userLoaded = true;
            })

        this.routeService.getAll()
            .map(routes => routes.filter(route => route.active === true))
            .subscribe(res => {
                this.routes = res;
                this.routeLoaded = true;
            })
    }

    updateInternship() {
        if (this.type !== undefined) {
            this.model.title = this.type + ': ' + this.model.title;
        }

        this.internshipService.put(this.model).subscribe(
            () => this.router.navigate(['internship'])
        )
    }

    allDataLoaded() {
        if (this.modelLoaded && this.instLoaded && this.userLoaded && this.routeLoaded) {
            return true;
        } else {
            return false;
        }
    }
}
