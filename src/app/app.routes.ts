import {RouterModule, Routes} from '@angular/router';
import {BlogComponent} from '../components/blog/blog.component';
import {InstitutionComponent} from '../components/institution/institution.component'
import {InternshipComponent} from '../components/internship/internship.component';
import {StudentComponent} from '../components/student/student.component';


const APP_ROUTES: Routes = [
  {path: '', component: BlogComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'institution', component: InstitutionComponent},
  {path: 'internship', component: InternshipComponent},
  {path: 'student', component: StudentComponent},
];

export const routing = RouterModule.forRoot(APP_ROUTES, {useHash: true});
