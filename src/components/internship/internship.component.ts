import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Internship } from 'models/Internship';

import { LiveInternshipService } from 'services/InternshipService/LiveInternshipService';

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html'
})
export class InternshipComponent implements OnInit {

  private internships: Internship[];
  private updateModel: Internship;

  constructor(private internshipService: LiveInternshipService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('currentUser') === 'null') {
      this.router.navigate(['/login'])
    }
    this.internshipService.getAll()
      .map(interns => interns.filter(intern => intern.active === true))
      .subscribe(res => {
        this.internships = res;
      });
  }

  goToEdit(id: number) {
    this.router.navigate(['../internship/update/', id]);
  }

  disableInternship(id: number) {
    this.updateModel = this.internships.filter(
      intern => intern.id === id
    )[0];
    this.updateModel.active = false;

    this.internshipService.put(this.updateModel).subscribe(
      () => window.location.reload()
    );
  }

}
