import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { PopupModalComponent } from 'src/app/core/modal/popup-modal/popup-modal.component';
import { AddTransactionModalComponent } from 'src/app/shared/modals/add-transaction-modal/add-transaction-modal.component';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UsersDashboardComponent implements OnInit {

  profileLink: AbstractControl;

  constructor(
    private fb: FormBuilder,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.profileLink = this.fb.group({
      link: []
    });
  }

  add() {
    this.dialog.open(PopupModalComponent , {
      panelClass: 'modal-fullscreen',
      data: {
        title: 'Add transaction',
        method: 'add',
        component: AddTransactionModalComponent
      }
    });
  }

}
