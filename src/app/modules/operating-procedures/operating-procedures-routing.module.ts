import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FilterMaintenanceComponent } from './filter-maintenance/filter-maintenance.component';
import { FilterElementsChangesComponent } from './filter-elements-changes/filter-elements-changes.component';
import { TankWashingComponent } from './tank-washing/tank-washing.component';

const routes: Routes = [
  {path: '', redirectTo: 'filter-maintenance', pathMatch: 'full'},
  {path: 'filter-maintenance', component: FilterMaintenanceComponent},
  {path: 'filter-elements-changes', component: FilterElementsChangesComponent},
  {path: 'tank-washing', component: TankWashingComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OperatingProceduresRoutingModule { }
