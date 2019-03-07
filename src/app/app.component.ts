import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  isMobile = false;

  @ViewChild('drawer') drawer;

  constructor(
    private deviceService: DeviceDetectorService,
    private router: Router
    ) {
    this.isMobile = this.deviceService.isMobile();
  }

  async navigate(route: string) {
    await this.router.navigate([route]);
    this.drawer.toggle();
  }

}
