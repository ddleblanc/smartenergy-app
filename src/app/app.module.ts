import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { DropdownDirective } from './components/shared/dropdown.directive';

import { AppComponent } from './app.component';
import { HeaderComponent} from './components/header/header.component';

import { AlertsComponent } from './components/alerts/alerts.component';

import { EnergyGainsComponent } from './components/energyGains/energyGains.component';

import { InvertersComponent } from './components/inverters/inverters.component';

import { LocationsComponent } from './components/locations/locations.component';

import { EnergyService } from './services/energy.service';
import { EnergyListComponent } from './components/energyGains/energy-list/energy-list.component';
import { EnergyItemComponent } from './components/energyGains/energy-list/energy-item/energy-item.component';
import { EnergyDetailsComponent } from './components/energyGains/energy-details/energy-details.component';
import { EnergyEditComponent } from './components/energyGains/energy-edit/energy-edit.component';
import { InverterListComponent } from './components/inverters/inverter-list/inverter-list.component';
import { InverterItemComponent } from './components/inverters/inverter-list/inverter-item/inverter-item.component';
import { InverterDetailsComponent } from './components/inverters/inverter-details/inverter-details.component';
import { InverterService } from './services/inverter.service';

import { Ng2SmartTableModule } from 'ng2-smart-table';



@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective,
    HeaderComponent,
    AlertsComponent,
    EnergyGainsComponent,
    InvertersComponent,
    LocationsComponent,
    EnergyListComponent,
    EnergyItemComponent,
    EnergyDetailsComponent,
    EnergyEditComponent,
    InverterListComponent,
    InverterItemComponent,
    InverterDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    Ng2SmartTableModule,
    AppRoutingModule

  ],
  providers: [
    EnergyService,
    InverterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
