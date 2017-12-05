import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InternshipComponent } from './internship/internship.component';
import { StudentComponent } from './student/student.component';
import { BlogComponent } from './blog/blog.component';
import { InstitutionComponent } from './institution/institution.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    InternshipComponent,
    StudentComponent,
    BlogComponent,
    InstitutionComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
