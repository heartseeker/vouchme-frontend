import { Component, OnInit, Output, EventEmitter, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ToolbarComponent implements OnInit {

  @Output() close = new EventEmitter();
  @Input() title;

  constructor() { }

  ngOnInit() {
  }

  action() {
    this.close.emit();
  }

}
