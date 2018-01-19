import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Institution } from 'models/institution';
import { InternshipRoute } from 'models/internshipRoute';

import { LiveInternshipRouteService } from 'services/InternshipRouteService/LiveInternshipRouteService';
import { LiveInstitutionService } from 'services/InstitutionService/LiveInstitutionService';

@Component({
    selector: 'app-update-internship-route',
    templateUrl: './update-internship-route.component.html'
})
export class UpdateInternshipRouteComponent implements OnInit {

    private institutions: Institution[];

    id: number;
    oldModel: InternshipRoute;
    model: InternshipRoute;


    constructor(
        private institutionService: LiveInstitutionService,
        private internshipRouteService: LiveInternshipRouteService,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.id = this.route.snapshot.params['id'];

        this.institutionService.getAll().subscribe(res => {
            this.institutions = res
        })

        this.internshipRouteService.get(this.id).subscribe(res => {
            this.model = res,
            this.oldModel = new InternshipRoute();
            this.oldModel.institution = res.institution;
        })
    }

    updateInternshipRoute() {
        this.internshipRouteService.put(this.model).subscribe();
        this.router.navigate(['internshiproute']);
    }
}
