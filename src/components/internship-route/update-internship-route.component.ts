import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { Institution } from "models/institution";
import { InternshipRoute } from "models/internshipRoute";
import { LiveInternshipRouteService } from "services/InternshipRouteService/LiveInternshipRouteService";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { LiveInstitutionService } from "services/InstitutionService/LiveInstitutionService";

@Component({
    selector: 'update-internship-route',
    templateUrl: './update-internship-route.component.html',
    styleUrls: ['./update-internship-route.component.css']
})
export class UpdateInternshipRouteComponent implements OnInit {

    private institutions: Institution[];

    id: number;
    model: InternshipRoute;


    constructor(
        private institutionService: LiveInstitutionService,
        private internshipRouteService: LiveInternshipRouteService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.id = this.route.snapshot.params['id'];

        this.institutionService.getAll().subscribe(res => {
            this.institutions = res
        })

        this.internshipRouteService.get(this.id).subscribe(res => {
            this.model = res
        })

        
    }

    updateInternshipRoute() {
        console.log(this.model);
        this.internshipRouteService.put(this.model).subscribe(res => {
            console.log(res);
        })
        this.router.navigate(['internshiproute']);
    }
}
