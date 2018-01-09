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
  private updateModel: Institution;

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

  disableInstitution(id: number){
    
    this.updateModel = this.institutions.filter(
      Institution => Institution.id == id,
    )[0]
    this.updateModel.active = false;
    console.log(this.updateModel);
    
    this.institutionService.put(this.updateModel).subscribe(res => {
      console.log(res);
   });
    
  }
}
