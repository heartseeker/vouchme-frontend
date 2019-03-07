import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersLoginComponent } from './users-login/users-login.component';
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { UsersDashboardComponent } from './users-dashboard/users-dashboard.component';
import { UsersSettingsComponent } from './users-settings/users-settings.component';


@NgModule({
  declarations: [
    UsersLoginComponent,
    UsersDashboardComponent,
    UsersSettingsComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
  ]
})
export class UsersModule { }
