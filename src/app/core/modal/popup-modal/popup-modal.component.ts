import { Component, OnInit, Inject } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-popup-modal',
  templateUrl: './popup-modal.component.html',
  styleUrls: ['./popup-modal.component.scss']
})
export class PopupModalComponent implements OnInit {

  portal: ComponentPortal<any>;
  title: string;

  constructor(
    public dialogRef: MatDialogRef<PopupModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    this.portal = new ComponentPortal(this.data.component);
    this.title = this.data.title;
   }

  ngOnInit() {
  }

  close() {
    this.dialogRef.close();
  }

}
