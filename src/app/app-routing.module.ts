import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertsComponent } from './components/alerts/alerts.component';
import { Alert } from './models/alert.model';
import { EnergyGainsComponent } from './components/energyGains/energyGains.component';
import { MasterData } from './models/masterData.model';
import { InvertersComponent } from './components/inverters/inverters.component';
import { Inverter } from './models/inverter.model';
import { LocationsComponent } from './components/locations/locations.component';
import { Location } from './models/location.model';
import { EnergyDetailsComponent } from './components/energyGains/energy-details/energy-details.component';
import { InverterDetailsComponent } from './components/inverters/inverter-details/inverter-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const appRoutes: Routes = [
  { path: 'alerts', component: AlertsComponent},
  { path: 'energyGains', component: EnergyGainsComponent, children:[
    { path: ':id', component: EnergyDetailsComponent}
  ]},
  { path: 'inverters', component: InvertersComponent, children: [
    { path: ':id', component: InverterDetailsComponent}
  ]},
  { path: 'locations', component: LocationsComponent},
  { path: 'dashboard', component: DashboardComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
