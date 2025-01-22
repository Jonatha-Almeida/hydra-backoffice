import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { EnginesComponent } from './engines/engines.component';
import { ReservoirsComponent } from './reservoirs/reservoirs.component';
import { ArduinosComponent } from './arduinos/arduinos.component';
import { SensorsComponent } from './sensors/sensors.component';
import { FiltersComponent } from './filters/filters.component';
import { WaterAnalysisComponent } from './water-analysis/water-analysis.component';


@NgModule({
  declarations: [
    EnginesComponent,
    ReservoirsComponent,
    ArduinosComponent,
    SensorsComponent,
    FiltersComponent,
    WaterAnalysisComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
