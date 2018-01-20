import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Institution } from 'models/institution';
import { InternshipRoute } from 'models/internshipRoute';

import { LiveInstitutionService } from 'services/InstitutionService/LiveInstitutionService';
import { LiveInternshipRouteService } from 'services/InternshipRouteService/LiveInternshipRouteService';


@Component({
    selector: 'app-add-internship-route',
    templateUrl: './add-internship-route.component.html'
})
export class AddInternshipRouteComponent implements OnInit {

    private institutions: Institution[];

    model = new InternshipRoute('', null);
    institution = null;

    constructor(
        private institutionService: LiveInstitutionService,
        private internshipRouteService: LiveInternshipRouteService,
        private router: Router
    ) { }

    ngOnInit(): void {
        if (localStorage.getItem('currentUser') === 'null') {
            this.router.navigate(['/login'])
        }
        this.institutionService.getAll()
            .map(insts => insts.filter(inst => inst.active === true))
            .subscribe(res => {
                this.institutions = res;
            })
    }

    postInternshipRoute() {
        this.model.institution = this.institution;
        this.internshipRouteService.post(this.model).subscribe(
            () => this.router.navigate(['internshiproute'])
        )
    }
}
