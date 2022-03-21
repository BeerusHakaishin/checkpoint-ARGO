import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeCrudComponent } from './home-crud/home-crud.component';
import { AboutCrudComponent } from './about-crud/about-crud.component';
import { RoyaumeCrudComponent } from './royaume-crud/royaume-crud.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeCrudComponent,
    AboutCrudComponent,
    RoyaumeCrudComponent
  ],
  imports: [
    CommonModule,
    IonicModule.forRoot()
  ],
  exports: [
    // UNIQUEMENT POUR LA VUE EN DEV FRONT
    DashboardComponent
  ]
})
export class AdminModule { }
