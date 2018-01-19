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

import { LocationService } from './services/location.service';
import { LocationsComponent } from './components/locations/locations.component';
import { LocationListComponent } from './components/locations/location-list/location-list.component';
import { LocationItemComponent } from './components/locations/location-list/location-item/location-item.component';
import { LocationDetailComponent } from './components/locations/location-details/location-details.component';


import { EnergyService } from './services/energy.service';
import { EnergyListComponent } from './components/energyGains/energy-list/energy-list.component';
import { EnergyItemComponent } from './components/energyGains/energy-list/energy-item/energy-item.component';
import { EnergyDetailsComponent } from './components/energyGains/energy-details/energy-details.component';
import { EnergyEditComponent } from './components/energyGains/energy-edit/energy-edit.component';
import { InverterListComponent } from './components/inverters/inverter-list/inverter-list.component';
import { InverterItemComponent } from './components/inverters/inverter-list/inverter-item/inverter-item.component';
import { InverterDetailsComponent } from './components/inverters/inverter-details/inverter-details.component';
import { InverterService } from './services/inverter.service';
import { MasterDataService } from './services/masterData.service';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { SidenavComponent } from './components/sidenav/sidenav.component';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}




@NgModule({
  declarations: [
    AppComponent,
    DropdownDirective,
    HeaderComponent,
    AlertsComponent,
    EnergyGainsComponent,
    InvertersComponent,
    LocationsComponent,
    LocationListComponent,
    LocationItemComponent,
    LocationDetailComponent,
    EnergyListComponent,
    EnergyItemComponent,
    EnergyDetailsComponent,
    EnergyEditComponent,
    InverterListComponent,
    InverterItemComponent,
    InverterDetailsComponent,
    DashboardComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    Ng2SmartTableModule,
    AngularFontAwesomeModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })


  ],
  providers: [
    EnergyService,
    InverterService,
    MasterDataService,
    LocationService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
