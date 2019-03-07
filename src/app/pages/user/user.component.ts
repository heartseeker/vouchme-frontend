import { MatDialog } from '@angular/material';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as chartjs from 'chart.js';
import { PopupModalComponent } from 'src/app/core/modal/popup-modal/popup-modal.component';
import { VoteListModalComponent } from 'src/app/shared/modals/vote-list-modal/vote-list-modal.component';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserComponent implements OnInit {

  max: number;

  constructor(
      private dialog: MatDialog,
      private snackbarService: SnackbarService
  ) { }

  ngOnInit() {
    this.max = 100;
    const ctx = document.getElementById('myChart');
    const myChart = new chartjs(ctx, {
      type: 'horizontalBar',
      data: {
          // labels: ['Trustmeter'],
          datasets: [{
              label: 'Trustmeter',
              data: [70],
              backgroundColor: [
                  'rgba(13, 209, 0, 0.2)',
              ],
              borderColor: [
                  'rgba(115, 237, 106, 1)',
              ],
              borderWidth: 1
          }]
      },
      options: {
        scales: {
            // yAxes: [{
            //     ticks: {
            //         beginAtZero: true
            //     }
            // }]
            // yAxes: [
            //   {
            //     ticks: {
            //       min: 0,
            //       max: this.max, // Your absolute max value
            //       callback: function (value) {
            //         return (value / this.max * 100).toFixed(0) + '%'; // convert it to percentage
            //       },
            //     },
            //     scaleLabel: {
            //       display: true,
            //       labelString: 'Percentage',
            //     },
            //   },
            // ],
            xAxes: [{
                ticks: {
                    min: 0,
                    max: 100,
                    callback: function(value) {
                        return value + '%';
                    }
                },
            }]
        },
        //   title: {
        //     display: true,
        //     text: 'Custom Chart Title'
        // }
      }
  });
  }

  vote(type: string) {
      let title;
      switch (type) {
          case 'vouch':
            title = 'Vouches';
            break;
          case 'infame':
            title = 'Infames';
            break;
          case 'transaction':
            title = 'Transactions';
            break;
      }

    this.dialog.open(PopupModalComponent , {
        panelClass: 'modal-fullscreen',
        data: {
          title: title,
          component: VoteListModalComponent
        }
    });
  }

  vouch() {
    this.snackbarService.openSuccess('You successfully vouch this person');
  }

  infame() {
    this.snackbarService.openError('You infame this person');
  }

}
