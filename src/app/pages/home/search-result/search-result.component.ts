import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { startWith, map } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SearchResultComponent implements OnInit {

  searchForm: FormGroup;
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.searchForm = this.fb.group({
      search: ['']
    });

    this.filteredOptions = this.searchForm.controls['search'].valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  navigate(name) {
    this.router.navigate([name]);
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  search() {
    this.router.navigate(['/search']);
  }
}
