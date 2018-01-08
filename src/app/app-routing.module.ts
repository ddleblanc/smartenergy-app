import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsComponent } from './components/alerts/alerts.component';
import { Alert } from './models/alert.model';
import { EnergyGainsComponent } from './components/energyGains/energyGains.component';
import { EnergyGain } from './models/energyGain.model';
import { InvertersComponent } from './components/inverters/inverters.component';
import { Inverter } from './models/inverter.model';
import { LocationsComponent } from './components/locations/locations.component';
import { Location } from './models/location.model';


const appRoutes: Routes = [ 
  { path: 'alerts', component: AlertsComponent},
  { path: 'energyGains', component: EnergyGainsComponent},
  { path: 'inverters', component: InvertersComponent},
  { path: 'locations', component: LocationsComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { } 