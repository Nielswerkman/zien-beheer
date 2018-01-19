import { OnInit, Component } from '@angular/core';
import { Router } from '@angular/router';

import { Institution } from 'models/institution';
import { Location } from 'models/location';

import { LiveInstitutionService } from 'services/InstitutionService/LiveInstitutionService';

@Component({
    selector: 'app-add-institution',
    templateUrl: './add-institution.component.html',
    styleUrls: ['./add-institution.component.css']
})
export class AddInstitutionComponent implements OnInit {

    model = new Institution(true, '', '', '', '', 0, new Location(0, 0), '', '', '', '', '');

    constructor(private institutionService: LiveInstitutionService, private router: Router) {

    }

    ngOnInit() {

    }

    postInstitution() {
        this.institutionService.post(this.model).subscribe(res => {
            console.log(res);
        });
        this.router.navigate(['institution'])
    }
}
