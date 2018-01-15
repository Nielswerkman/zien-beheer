import { Component, OnInit } from "@angular/core";
import { InternshipRoute } from "models/internshipRoute";
import { LiveInternshipRouteService } from "services/InternshipRouteService/LiveInternshipRouteService";
import { Router } from "@angular/router";

@Component({
    selector: 'internship-route',
    templateUrl: './internship-route.component.html',
    styleUrls: ['./internship-route.component.css']
})

export class InternshipRouteComponent implements OnInit {

    private routes: InternshipRoute[];
    private updateModel: InternshipRoute;

    constructor(private routeService: LiveInternshipRouteService, private route: Router) {}

    ngOnInit() {
        this.routeService.getAll()
        .map(routes => routes.filter(route => route.active === true))
        .subscribe(res => {
            this.routes = res;
            console.log(res);
        })
    }

    goToEdit(id: number){
        this.route.navigate(['../internshiproute/update/', id]);
    }

    disableInternshipRoute(id: number){
    
        this.updateModel = this.routes.filter(
          route => route.id == id,
        )[0]
        this.updateModel.active = false;
        console.log(this.updateModel);
        
        this.routeService.put(this.updateModel).subscribe(res => {
          console.log(res);
       });
        
    }



}
