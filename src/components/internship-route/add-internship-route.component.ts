import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Institution } from 'models/institution';
import { LiveInstitutionService } from 'services/InstitutionService/LiveInstitutionService';
import { InternshipRoute } from 'models/internshipRoute';
import { LiveInternshipRouteService } from 'services/InternshipRouteService/LiveInternshipRouteService';
import { Router } from '@angular/router';

@Component({
    selector: 'app-add-internship-route',
    templateUrl: './add-internship-route.component.html',
    styleUrls: ['./add-internship-route.component.css']
})
export class AddInternshipRouteComponent implements OnInit {

    private institutions: Institution[];

    model = new InternshipRoute('', null);
    institution = null;

    constructor(
        private institutionService: LiveInstitutionService,
        private internshipRouteService: LiveInternshipRouteService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.institutionService.getAll()
        .map(insts => insts.filter(inst => inst.active === true))
        .subscribe(res => {
            this.institutions = res;
        })
    }

    postInternshipRoute() {
        this.model.institution = this.institution;
        this.internshipRouteService.post(this.model).subscribe(res => {
            console.log(res);
        })
        this.router.navigate(['internshiproute']);
    }
}
