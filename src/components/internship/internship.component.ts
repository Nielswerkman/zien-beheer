import { Component, OnInit } from '@angular/core';
import { LiveInternshipService } from 'services/InternshipService/LiveInternshipService';
import { Internship } from 'models/Internship';

@Component({
  selector: 'app-internship',
  templateUrl: './internship.component.html',
  styleUrls: ['./internship.component.css']
})
export class InternshipComponent implements OnInit {

  private internships: Internship[];

  constructor(private internshipService: LiveInternshipService) { }

  ngOnInit() {
    this.internshipService.getAll().subscribe(res => {
      this.internships = res,
      console.log(this.internships)
    })
  }

}
