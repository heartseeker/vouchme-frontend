import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material';
import { SnackbarComponent } from '../components/snackbar/snackbar.component';
import { SnackBarStatus } from './snackbar-status';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) {}

  public open(
    status: SnackBarStatus,
    message: string
  ) {
    return this.snackBar.openFromComponent(SnackbarComponent, {
      duration: 2000,
      verticalPosition: 'top',
      horizontalPosition: 'right',
      data: {
        status,
        message
      }
    });
  }

  public openSuccess(message: string): MatSnackBarRef<SnackbarComponent> {
    return this.open(SnackBarStatus.SUCCESS, message);
  }

  public openWarning(message: string): MatSnackBarRef<SnackbarComponent> {
    return this.open(SnackBarStatus.WARNING, message);
  }

  public openError(message: string): MatSnackBarRef<SnackbarComponent> {
    return this.open(SnackBarStatus.ERROR, message);
  }
}
