import { OnInit, Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router'

import { Location } from 'models/location';
import { Institution } from 'models/institution';

import { LiveInstitutionService } from 'services/InstitutionService/LiveInstitutionService';

@Component({
    selector: 'app-update-institution',
    templateUrl: './update-institution.component.html'
})
export class UpdateInstitutionComponent implements OnInit {

    id: number;

    model: any;

    constructor(private institutionService: LiveInstitutionService, private router: Router, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.id = this.route.snapshot.params['id'];

        this.institutionService.get(this.id).subscribe(res => {
            this.model = res;
        })
    }

    updateInstitution() {
        this.institutionService.put(this.model).subscribe();
        this.router.navigate(['institution'])
    }
}
