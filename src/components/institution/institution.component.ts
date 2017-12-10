import { Component, OnInit } from '@angular/core';
import { Institution } from 'models/institution';
import { LiveInstitutionService } from 'services/InstitutionService/LiveInstitutionService';

@Component({
  selector: 'app-institution',
  templateUrl: './institution.component.html',
  styleUrls: ['./institution.component.css']
})
export class InstitutionComponent implements OnInit {

  private institutions: Institution[];

  constructor(private institutionService: LiveInstitutionService) { }

  ngOnInit() {
    this.institutionService.getAll().subscribe(res => {
      this.institutions = res,
      console.log(Institution);
    })
  }

}
