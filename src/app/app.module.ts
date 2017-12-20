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
    EnergyEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [EnergyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
