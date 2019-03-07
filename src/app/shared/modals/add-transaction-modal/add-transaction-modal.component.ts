import { MatDialogRef } from '@angular/material';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { PopupModalComponent } from 'src/app/core/modal/popup-modal/popup-modal.component';
import { SnackbarService } from '../../services/snackbar.service';

export interface User {
  name: string;
}

@Component({
  selector: 'app-add-transaction-modal',
  templateUrl: './add-transaction-modal.component.html',
  styleUrls: ['./add-transaction-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddTransactionModalComponent implements OnInit {

  transactionForm: FormGroup;

  channels = [
    { label: 'Facebook', value: 'facebook' },
    { label: 'Shopee', value: 'shopee' },
    { label: 'OLX', value: 'olx' },
    { label: 'Carousel', value: 'carousel' },
  ];

  status = [
    { label: 'On going', value: '1' },
    { label: 'Canceled', value: '2' },
  ];

  options: User[] = [
    {name: 'Mary'},
    {name: 'Shelley'},
    {name: 'Igor'}
  ];
  filteredOptions: Observable<User[]>;

  constructor(
    private fb: FormBuilder,
    private snackbarService: SnackbarService,
    private matDialogRef: MatDialogRef<PopupModalComponent>,
  ) { }

  ngOnInit() {
    this.transactionForm = this.fb.group({
      channel: ['', Validators.required],
      url: ['', Validators.required],
      partner: ['', Validators.required],
      status: ['', Validators.required],
    });

    this.filteredOptions = this.transactionForm.controls['partner'].valueChanges
      .pipe(
        startWith<string | User>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : this.options.slice())
      );
  }

  field(field: string) {
    return this.transactionForm.controls[field];
  }

  displayFn(user?: User): string | undefined {
    return user ? user.name : undefined;
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  cancel() {
    this.matDialogRef.close();
  }

  confirm() {
    this.matDialogRef.close();
    this.snackbarService.openSuccess('Transaction succesfully added!');
  }

}
