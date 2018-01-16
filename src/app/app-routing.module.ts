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
import { LocationDetailComponent } from './components/locations/location-details/location-details.component';
import { EnergyDetailsComponent } from './components/energyGains/energy-details/energy-details.component';
import { InverterDetailsComponent } from './components/inverters/inverter-details/inverter-details.component';


const appRoutes: Routes = [ 
  { path: 'alerts', component: AlertsComponent},
  { path: 'energyGains', component: EnergyGainsComponent, children:[
    { path: ':id', component: EnergyDetailsComponent}
  ]},
  { path: 'inverters', component: InvertersComponent, children: [ 
    { path: ':id', component: InverterDetailsComponent}
  ]},
  { path: 'locations', component: LocationsComponent, children:[
    { path: ':id',component: LocationDetailComponent }
  ]},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { } 