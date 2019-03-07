import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupModalComponent } from './modal/popup-modal/popup-modal.component';
import { MaterialModule } from './material.module';
import { PortalModule } from '@angular/cdk/portal';
import { ComponentsModule } from '../shared/components/components.module';


@NgModule({
  declarations: [
    PopupModalComponent
  ],
  imports: [
    CommonModule,
    PortalModule,
    MaterialModule,
    ComponentsModule,
  ],
  entryComponents: [
    PopupModalComponent
  ]
})
export class CoreModule { }
