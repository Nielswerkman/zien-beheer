import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';

import { Institution } from 'models/institution';
import { Location } from 'models/location';

import { LiveInstitutionService } from 'services/InstitutionService/LiveInstitutionService';

@Component({
    selector: 'app-add-institution',
    templateUrl: './add-institution.component.html'
})
export class AddInstitutionComponent implements OnInit {

    model = new Institution(true, '', '', '', '', 0, new Location(0, 0), '', '', '', '', '');

    constructor(private institutionService: LiveInstitutionService, private router: Router) {

    }

    ngOnInit() {
        if (localStorage.getItem('currentUser') === 'null') {
            this.router.navigate(['/login'])
        }
    }

    postInstitution() {
        this.institutionService.post(this.model).subscribe();
        this.router.navigate(['institution'])
    }
}
