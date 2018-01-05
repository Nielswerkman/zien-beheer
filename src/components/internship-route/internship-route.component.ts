import { Component, OnInit } from "@angular/core";
import { InternshipRoute } from "models/internshipRoute";
import { LiveInternshipRouteService } from "services/InternshipRouteService/LiveInternshipRouteService";

@Component({
    selector: 'internship-route',
    templateUrl: './internship-route.component.html',
    styleUrls: ['./internship-route.component.css']
})

export class InternshipRouteComponent implements OnInit {

    private routes: InternshipRoute[];

    constructor(private routeService: LiveInternshipRouteService) {}

    ngOnInit() {
        this.routeService.getAll().subscribe(res => {
            this.routes = res;
            console.log(res);
        })
    }
}
