import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { InternshipRoute } from 'models/internshipRoute';

import { LiveInternshipRouteService } from 'services/InternshipRouteService/LiveInternshipRouteService';

@Component({
    selector: 'app-internship-route',
    templateUrl: './internship-route.component.html'
})

export class InternshipRouteComponent implements OnInit {

    private routes: InternshipRoute[];
    private updateModel: InternshipRoute;

    constructor(private routeService: LiveInternshipRouteService, private route: Router) { }

    ngOnInit() {
        this.routeService.getAll()
            .map(routes => routes.filter(route => route.active === true))
            .subscribe(res => {
                this.routes = res;
            })
    }

    goToEdit(id: number) {
        this.route.navigate(['../internshiproute/update/', id]);
    }

    disableInternshipRoute(id: number) {
        this.updateModel = this.routes.filter(
            route => route.id === id,
        )[0]
        this.updateModel.active = false;

        this.routeService.put(this.updateModel).subscribe();
    }
}
