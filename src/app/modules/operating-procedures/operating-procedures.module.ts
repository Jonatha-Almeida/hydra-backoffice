import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperatingProceduresRoutingModule } from './operating-procedures-routing.module';
import { TankWashingComponent } from './tank-washing/tank-washing.component';
import { FilterMaintenanceComponent } from './filter-maintenance/filter-maintenance.component';
import { FilterElementsChangesComponent } from './filter-elements-changes/filter-elements-changes.component';


@NgModule({
  declarations: [
    TankWashingComponent,
    FilterMaintenanceComponent,
    FilterElementsChangesComponent
  ],
  imports: [
    CommonModule,
    OperatingProceduresRoutingModule
  ]
})
export class OperatingProceduresModule { }
