import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeCrudComponent } from './home-crud/home-crud.component';
import { UserCrudComponent } from './user-crud/user-crud.component';
import { RoyaumeFormComponent } from './forms/royaume-form/royaume-form.component';
import { UserFormComponent } from './forms/user-form/user-form.component';
import { AboutFormComponent } from './forms/about-form/about-form.component';
import { AboutCrudComponent } from './about-crud/about-crud.component';
import { RoyaumeCrudComponent } from './royaume-crud/royaume-crud.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeCrudComponent,
    AboutCrudComponent,
    RoyaumeCrudComponent,
    UserCrudComponent,
    RoyaumeFormComponent,
    UserFormComponent,
    AboutFormComponent
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
