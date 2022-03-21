import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import { HomeCrudComponent } from './home-crud/home-crud.component';

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'homeCrud', component: HomeCrudComponent},
  {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}