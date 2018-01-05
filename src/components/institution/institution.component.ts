import { Component, OnInit } from '@angular/core';
import { Institution } from 'models/institution';
import { LiveInstitutionService } from 'services/InstitutionService/LiveInstitutionService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-institution',
  templateUrl: './institution.component.html',
  styleUrls: ['./institution.component.css']
})
export class InstitutionComponent implements OnInit {

  private institutions: Institution[];

  constructor(private institutionService: LiveInstitutionService, private route: Router) { }

  ngOnInit() {
    this.institutionService.getAll().subscribe(res => {
      this.institutions = res,
      console.log(Institution);
    })
  }

  goToEdit(id: number){
    this.route.navigate(['../institution/update/', id]);
  }

}
