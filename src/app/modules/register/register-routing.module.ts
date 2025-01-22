import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArduinosComponent } from './arduinos/arduinos.component';
import { ReservoirsComponent } from './reservoirs/reservoirs.component';
import { EnginesComponent } from './engines/engines.component';
import { FiltersComponent } from './filters/filters.component';
import { SensorsComponent } from './sensors/sensors.component';
import { WaterAnalysisComponent } from './water-analysis/water-analysis.component';

const routes: Routes = [
  {path: '', redirectTo: 'arduinos', pathMatch: 'full'},
  {path: 'arduinos', component: ArduinosComponent},
  {path: 'reservoirs', component: ReservoirsComponent},
  {path: 'engines', component: EnginesComponent},
  {path: 'filters', component: FiltersComponent},
  {path: 'sensors', component: SensorsComponent},
  {path: 'water-analysis', component: WaterAnalysisComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
