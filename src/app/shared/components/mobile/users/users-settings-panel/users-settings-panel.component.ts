import { Component, OnInit, ViewEncapsulation, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SnackbarService } from './../../../../services/snackbar.service';

@Component({
  selector: 'app-mobile-users-settings-panel',
  templateUrl: './users-settings-panel.component.html',
  styleUrls: ['./users-settings-panel.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UsersSettingsPanelComponent implements OnInit {

  @Output() confirm = new EventEmitter();
  personalDetailForm: FormGroup;
  credentialsForm: FormGroup;

  message: string;
  imagePath;
  imgURL: any;

  constructor(
    private fb: FormBuilder,
    ) {}

  ngOnInit() {
    this.personalDetailForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
    });

    this.credentialsForm = this.fb.group({
      government_id1: ['']
    });
  }

  field(form: string, field: string) {
    return this[form].controls[field];
  }

  preview(files) {
    if (files.length === 0) {
      return;
    }

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = 'Only images are supported.';
      return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    };
  }

  confirmAction() {
    this.confirm.emit({ status: 200, message: 'confirm'});
  }

}
