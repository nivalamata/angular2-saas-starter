import { RouterModule, Routes }   from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

import { AuthGuard } from './auth-guard';

export const APP_ROUTES:Routes = [
  { path: 'login',component: LoginComponent },
  { path: 'signup',component: SignupComponent },
  { path: '',component: DashboardComponent, canActivate: [AuthGuard] }
];