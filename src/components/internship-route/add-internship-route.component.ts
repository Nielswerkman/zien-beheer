import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { Institution } from "models/institution";
import { LiveInstitutionService } from "services/InstitutionService/LiveInstitutionService";

@Component({
    selector: 'add-internship-route',
    templateUrl: './add-internship-route.component.html',
    styleUrls: ['./add-internship-route.component.css']
})
export class AddInternshipRouteComponent implements OnInit {

    private institutions: Institution[];

    constructor(private institutionService: LiveInstitutionService) {}

    ngOnInit(): void {
        this.institutionService.getAll().subscribe(res => {
            this.institutions = res;
        })
    }
}
