import { Component, OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EnergyService } from '../../services/energy.service';
import { Inverter } from '../../models/inverter.model';
import { InverterService } from '../../services/inverter.service';
import { getLocaleExtraDayPeriodRules } from '@angular/common/src/i18n/locale_data_api';

@Component({
  selector: 'app-energyGains',
  templateUrl: './energyGains.component.html',
  styleUrls: ['./energyGains.component.css']
})
export class EnergyGainsComponent implements OnInit {
  id:string
  inverter: Inverter
  Loaded = false;

  constructor(
    private inverterService: InverterService,
    private route: ActivatedRoute){}

  ngOnInit(){
        this.inverter = this.inverterService.getCurrentInverter()
        this.Loaded = true;
  }
  
}
