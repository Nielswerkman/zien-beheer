import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Internship } from 'models/Internship';

import { LiveInternshipService } from 'services/InternshipService/LiveInternshipService';

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.css']
})
export class InternshipComponent implements OnInit {

  private internships: Internship[];
  private updateModel: Internship;

  constructor(private internshipService: LiveInternshipService, private route: Router) { }

  ngOnInit() {
    this.internshipService.getAll()
    .map(interns => interns.filter(intern => intern.active === true))
    .subscribe(res => {
      this.internships = res,
      console.log(this.internships)
    })
  }

  goToEdit(id: number) {
      this.route.navigate(['../internship/update/', id]);
  }

  disableInternship(id: number) {
      this.updateModel = this.internships.filter(
        intern => intern.id === id
      )[0];
      this.updateModel.active = false;

      this.internshipService.put(this.updateModel).subscribe(res => {
        console.log(res)
      });
  }

}
