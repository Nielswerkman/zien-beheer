import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {InternshipComponent} from '../components/internship/internship.component';
import {StudentComponent} from '../components/student/student.component';
import {BlogComponent} from '../components/blog/blog.component';
import {InstitutionComponent} from '../components/institution/institution.component';
import {SidebarComponent} from '../components/sidebar/sidebar.component';
import {routing} from 'app/app.routes';
import {LoginComponent} from '../components/login/login.component';
import {HttpClientService} from 'services/HttpClientService';
import {LiveBlogService} from 'services/BlogService/LiveBlogService';
import {LiveUserService} from '../services/UserService/LiveUserService';
import {MockUserService} from '../services/UserService/MockUserService';

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
    HttpModule
  ],
  providers: [HttpClientService,
    LiveBlogService,
    MockUserService,
    LiveUserService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
