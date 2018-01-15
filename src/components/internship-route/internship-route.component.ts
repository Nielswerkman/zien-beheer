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
    private updateModel: InternshipRoute;

    constructor(private routeService: LiveInternshipRouteService) {}

    ngOnInit() {
        this.routeService.getAll().subscribe(res => {
            this.routes = res;
            console.log(res);
        })
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
