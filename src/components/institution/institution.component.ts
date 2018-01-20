import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Institution } from 'models/institution';

import { LiveInstitutionService } from 'services/InstitutionService/LiveInstitutionService';

@Component({
  selector: 'app-institution',
  templateUrl: './institution.component.html'
})
export class InstitutionComponent implements OnInit {

  private institutions: Institution[];
  private updateModel: Institution;

  constructor(private institutionService: LiveInstitutionService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('currentUser') === 'null') {
      this.router.navigate(['/login'])
    }
    this.institutionService.getAll()
      .map(insts => insts.filter(inst => inst.active === true))
      .subscribe(res => {
        this.institutions = res;
      })
  }

  goToEdit(id: number) {
    this.router.navigate(['../institution/update/', id]);
  }

  disableInstitution(id: number) {

    this.updateModel = this.institutions.filter(
      Institution => Institution.id === id,
    )[0]
    this.updateModel.active = false;

    this.institutionService.put(this.updateModel).subscribe();
  }
}
