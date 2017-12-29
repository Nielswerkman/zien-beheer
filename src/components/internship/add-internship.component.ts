import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import { Component } from "@angular/core";
import { Institution } from "models/institution";
import { LiveInstitutionService } from "services/InstitutionService/LiveInstitutionService";

@Component({
    selector: 'add-internship',
    templateUrl: './add-internship.component.html',
    styleUrls: ['./add-internship.component.css']
})
export class AddInternshipComponent implements OnInit {

    private institutions: Institution[];

    constructor(private institutionService: LiveInstitutionService) {}

    ngOnInit() {
        this.institutionService.getAll().subscribe(res => {
            this.institutions = res;
        })
    }
}
