import {RouterModule, Routes} from '@angular/router';
import {BlogComponent} from '../components/blog/blog.component';
import {InstitutionComponent} from '../components/institution/institution.component'
import {InternshipComponent} from '../components/internship/internship.component';
import {UserComponent} from '../components/user/user.component';
import {AddUserComponent} from '../components/user/add-user.component'
import {UpdateUserComponent} from '../components/user/update-user.component'
import { AddInternshipComponent } from 'components/internship/add-internship.component';
import { AddInstitutionComponent } from 'components/institution/add-institution.component';
import { UpdateInstitutionComponent } from 'components/institution/update-institution.component';
import { InternshipRouteComponent } from 'components/internship-route/internship-route.component';
import { AddInternshipRouteComponent } from 'components/internship-route/add-internship-route.component';
import { ShowBlogComponent } from 'components/blog/show-blog.component';
import { UpdateInternshipRouteComponent } from 'components/internship-route/update-internship-route.component';


const APP_ROUTES: Routes = [
  {path: '', component: BlogComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'blog/show/:id', component: ShowBlogComponent},
  {path: 'institution', component: InstitutionComponent},
  {path: 'institution/add', component: AddInstitutionComponent},
  {path: 'institution/update/:id', component: UpdateInstitutionComponent},
  {path: 'internship', component: InternshipComponent},
  {path: 'internship/add', component: AddInternshipComponent},
  {path: 'internshiproute', component: InternshipRouteComponent},
  {path: 'internshiproute/add', component: AddInternshipRouteComponent},
  {path: 'internshiproute/update/:id', component: UpdateInternshipRouteComponent},
  {path: 'user', component: UserComponent},
  {path: 'user/add', component: AddUserComponent},
  {path: 'user/update/:id', component: UpdateUserComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES, {useHash: true});
