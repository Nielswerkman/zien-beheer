import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {InternshipComponent} from '../components/internship/internship.component';
import {StudentComponent} from '../components/student/student.component';
import {BlogComponent} from '../components/blog/blog.component';
import { InstitutionComponent } from '../components/institution/institution.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { routing } from 'app/app.routes';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from '../components/login/login.component';
import { HttpClientService } from 'services/HttpClientService';
import { LiveBlogService } from 'services/BlogService/LiveBlogService';
import { LiveUserService } from '../services/UserService/LiveUserService';
import { LiveInternshipService } from 'services/InternshipService/LiveInternshipService';
import { LiveInstitutionService } from 'services/InstitutionService/LiveInstitutionService';

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
    routing,
    FormsModule,
    HttpModule
  ],
  providers: [HttpClientService,
    LiveBlogService,
    LiveUserService,
    LiveInternshipService,
    LiveInstitutionService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
