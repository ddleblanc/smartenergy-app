import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { DropdownDirective } from './components/shared/dropdown.directive';

import { AppComponent } from './app.component';
import { HeaderComponent} from './components/header/header.component';

import { AlertsComponent } from './components/alerts/alerts.component';

import { EnergyGainsComponent } from './components/energyGains/energyGains.component';

import { InvertersComponent } from './components/inverters/inverters.component';

import { LocationsComponent } from './components/locations/locations.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective,
    HeaderComponent,
    AlertsComponent,
    EnergyGainsComponent,
    InvertersComponent,
    LocationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
