import { OnInit, Component } from '@angular/core';
import { Institution } from 'models/institution';
import { LiveInstitutionService } from 'services/InstitutionService/LiveInstitutionService';
import { Location } from 'models/location';
import { Router } from '@angular/router';
import { ActivatedRoute, Params} from '@angular/router'


@Component({
    selector: 'app-update-institution',
    templateUrl: './update-institution.component.html',
    styleUrls: ['./update-institution.component.css']
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
        this.institutionService.put(this.model).subscribe(res => {
            console.log(res);
        });
        this.router.navigate(['institution'])
    }
}
