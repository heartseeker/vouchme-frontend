import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTransactionModalComponent } from './add-transaction-modal/add-transaction-modal.component';
import { MaterialModule } from 'src/app/core/material.module';
import { ComponentsModule } from '../components/components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { VoteListModalComponent } from './vote-list-modal/vote-list-modal.component';


@NgModule({
  declarations: [
    AddTransactionModalComponent,
    VoteListModalComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ComponentsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [
    AddTransactionModalComponent,
    VoteListModalComponent,
  ]
})
export class ModalsModule { }
