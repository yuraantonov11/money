import { Routes, RouterModule } from '@angular/router';

import { TasksComponent } from './components/tasks/tasks.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './not-found.component';
// import { RegisterComponent } from './register/index';
// import { AuthGuard } from './_guards/index';

const appRoutes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },

  // otherwise redirect to home
  { path: '**', component: PageNotFoundComponent }
];

export const AppRoutingModule = RouterModule.forRoot(appRoutes);
