import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {InternshipComponent} from '../components/internship/internship.component';
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
import { UserComponent } from 'components/user/user.component';
import { AddUserComponent } from 'components/user/add-user.component';
import { AddInternshipComponent } from 'components/internship/add-internship.component';
import { AddInstitutionComponent } from 'components/institution/add-institution.component';
import { LiveInternshipRouteService } from 'services/InternshipRouteService/LiveInternshipRouteService';
import { InternshipRouteComponent } from 'components/internship-route/internship-route.component';

@NgModule({
  declarations: [
    AppComponent,
    InternshipComponent,
    AddInternshipComponent,
    InternshipRouteComponent,
    UserComponent,
    AddUserComponent,
    BlogComponent,
    InstitutionComponent,
    AddInstitutionComponent,
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
    LiveInternshipRouteService,
    LiveInstitutionService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
