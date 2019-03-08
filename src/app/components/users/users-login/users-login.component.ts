import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/core/api.service';


@Component({
  selector: 'app-users-login',
  templateUrl: './users-login.component.html',
  styleUrls: ['./users-login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UsersLoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private http: ApiService,
    private ref: ChangeDetectorRef,
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;

    this.http.post('auth', { username, password }).subscribe((result) => {
      this.router.navigate(['/users/dashboard']);
    }, (err) => {
      this.loginForm.setErrors({ invalid_credentials: { message: err.error.message }});
      console.log('this.loginForm >', this.loginForm);
      console.log('username valid >', this.loginForm.get('username').valid);
      console.log('has error  >>>', this.loginForm.hasError('invalid_credentials'));
      console.log('loginForm.errors.invalid_credentials.message  >>>', this.loginForm.errors.invalid_credentials.message);
    });
  }
}
