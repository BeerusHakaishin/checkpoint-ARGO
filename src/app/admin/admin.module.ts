import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from "@angular/forms";
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeCrudComponent } from './home-crud/home-crud.component';
import { UserCrudComponent } from './user-crud/user-crud.component';
import { RoyaumeFormComponent } from './forms/royaume-form/royaume-form.component';
import { UserFormComponent } from './forms/user-form/user-form.component';
import { RoyaumeCrudComponent } from './royaume-crud/royaume-crud.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeCrudComponent,
    RoyaumeCrudComponent,
    UserCrudComponent,
    RoyaumeFormComponent,
    UserFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule.forRoot()
  ],
  exports: [
    // UNIQUEMENT POUR LA VUE EN DEV FRONT
    DashboardComponent
  ]
})
export class AdminModule { }
