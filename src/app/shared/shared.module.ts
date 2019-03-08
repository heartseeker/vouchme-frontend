import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../core/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersSettingsPanelComponent } from './components/mobile/users/users-settings-panel/users-settings-panel.component';
import { ModalsModule } from './modals/modals.module';
import { SnackbarService } from './services/snackbar.service';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    UsersSettingsPanelComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    ModalsModule,
    HttpClientModule,
  ],
  exports: [
    MaterialModule,
    ReactiveFormsModule,
    UsersSettingsPanelComponent,
  ],
  providers: [
    SnackbarService,
    UserService,
  ]
})
export class SharedModule { }
