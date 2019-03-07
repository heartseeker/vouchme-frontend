import { SnackbarService } from './../../shared/services/snackbar.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private snackbarService: SnackbarService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  confirm(e) {
    console.log('event > ', e);
    this.snackbarService.openSuccess('Registered successfully.');
    this.router.navigate(['/users/login']);
  }

}
