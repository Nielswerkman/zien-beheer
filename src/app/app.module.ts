import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InternshipComponent } from '../components/internship/internship.component';
import { StudentComponent } from '../components/student/student.component';
import { BlogComponent } from '../components/blog/blog.component';
import { InstitutionComponent } from '../components/institution/institution.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import {routing} from 'app/app.routes';
import { LoginComponent } from '../components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    InternshipComponent,
    StudentComponent,
    BlogComponent,
    InstitutionComponent,
    SidebarComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
