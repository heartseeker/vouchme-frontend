import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MaterialModule } from 'src/app/core/material.module';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { UsersListComponent } from './mobile/users/users-list/users-list.component';


@NgModule({
  declarations: [
    ToolbarComponent,
    SnackbarComponent,
    UsersListComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    ToolbarComponent,
    UsersListComponent,
  ],
  entryComponents: [
    SnackbarComponent
  ]
})
export class ComponentsModule { }
