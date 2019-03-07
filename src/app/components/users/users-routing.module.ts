import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersLoginComponent } from './users-login/users-login.component';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';
import { UsersSettingsComponent } from './users-settings/users-settings.component';


const routes: Routes = [
  {
    path: 'login',
    component: UsersLoginComponent,
  },
  {
    path: 'dashboard',
    component: UsersDashboardComponent,
  },
  {
    path: 'settings',
    component: UsersSettingsComponent,
  },
  {
    path: '**',
    redirectTo: '/users/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
