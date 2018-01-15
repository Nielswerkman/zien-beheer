import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { Component } from "@angular/core";
import { Institution } from "models/institution";
import { LiveInstitutionService } from "services/InstitutionService/LiveInstitutionService";
import { LiveUserService } from "services/UserService/LiveUserService";
import { Internship } from "models/Internship";
import { User } from "models/user";
import { Blog } from "models/blog";
import { LiveInternshipService } from "services/InternshipService/LiveInternshipService";
import { LiveInternshipRouteService } from "services/InternshipRouteService/LiveInternshipRouteService";
import { InternshipRoute } from "models/internshipRoute";
import { Router } from "@angular/router";

@Component({
    selector: 'add-internship',
    templateUrl: './add-internship.component.html',
    styleUrls: ['./add-internship.component.css']
})
export class AddInternshipComponent implements OnInit {

    private institutions: Institution[];
    private users: User[];
    private routes: InternshipRoute[];

    internship: Internship;

    name = "";
    type = "";
    summary = "";
    dateStart = null;
    dateEnd = null;
    institution = null;
    user = null;
    route = null;

    constructor(private internshipService: LiveInternshipService, private institutionService: LiveInstitutionService,
        private userService: LiveUserService, private routeService: LiveInternshipRouteService, private router: Router) {}

    ngOnInit() {
        this.institutionService.getAll().subscribe(res => {
            this.institutions = res;
        })

        this.userService.getAll().subscribe(res => {
            this.users = res;
        })

        this.routeService.getAll().subscribe(res => {
            this.routes = res;
        })
    }

    postInternship() {
        this.internship = new Internship();
        this.internship.title = this.type + ": " + this.name;
        this.internship.summary = this.summary;
        this.internship.startDate = this.dateStart;
        this.internship.endDate = this.dateEnd;
        this.internship.institution = this.institution;
        this.internship.internshipRoute = this.route;
        this.internship.semester = 5;
        this.internship.user = this.user;

        let blog = new Blog();
        blog.creator = this.user;
        this.internship.blog = blog;

        this.internshipService.post(this.internship).subscribe(res => {
            console.log(res);
        })
        this.router.navigate(['internship']);
    }
}
