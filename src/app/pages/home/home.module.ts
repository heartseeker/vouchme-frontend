import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchResultComponent } from './search-result/search-result.component';
import { ComponentsModule } from 'src/app/shared/components/components.module';


@NgModule({
  declarations: [
    HomeComponent,
    SearchResultComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
  ]
})
export class HomeModule { }
