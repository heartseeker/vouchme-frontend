import { MAT_DIALOG_DATA } from '@angular/material';
import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-vote-list-modal',
  templateUrl: './vote-list-modal.component.html',
  styleUrls: ['./vote-list-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class VoteListModalComponent implements OnInit {

  selected: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data
  ) {
    switch (this.data.title) {
      case 'Vouches':
        this.selected = 0;
        break;
      case 'Infames':
        this.selected = 1;
        break;
      case 'Transactions':
        this.selected = 2;
        break;
    }
  }

  ngOnInit() {
  }

}
