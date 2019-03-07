import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material';
import { SnackBarStatus } from '../../services/snackbar-status';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SnackbarComponent implements OnInit {

  public statusIcon;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any) { }

  ngOnInit() {
    this.setStatus();
  }

  public getStatus(): SnackBarStatus {
    return this.data.status;
  }

  public getStatusClassName(): string {
    return this.data.status.name;
  }

  private setStatus(): void {
    switch (this.data.status) {
      case SnackBarStatus.SUCCESS:
        this.statusIcon = 'done';
        break;
      case SnackBarStatus.WARNING:
        this.statusIcon = 'warning';
        break;
      case SnackBarStatus.ERROR:
        this.statusIcon = 'warning';
        break;
      default:
        throw new Error(`PocitSnackBarStatus: invalid status value '${this.data.status}'`);
    }
  }


}
