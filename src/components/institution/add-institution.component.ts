import { OnInit, Component } from "@angular/core";
import { Institution } from "models/institution";
import { LiveInstitutionService } from "services/InstitutionService/LiveInstitutionService";
import { Location } from "models/location";
import { Router } from "@angular/router";


@Component({
    selector: 'add-institution',
    templateUrl: './add-institution.component.html',
    styleUrls: ['./add-institution.component.css']
})
export class AddInstitutionComponent implements OnInit {

    model = new Institution(true, "", "", "", "", 0, new Location(0,0), "", "", "", "", "");

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
