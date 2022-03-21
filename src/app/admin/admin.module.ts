import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    // UNIQUEMENT POUR LA VUE EN DEV FRONT
    DashboardComponent
  ]
})
export class AdminModule { }
