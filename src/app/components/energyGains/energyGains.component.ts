import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Value } from '../../models/value.model';
import { EnergyService } from '../../services/energy.service';

@Component({
  selector: 'app-energyGains',
  templateUrl: './energyGains.component.html'
})
export class EnergyGainsComponent implements OnInit {

  energy : any  = {} ;
  dataArray : Value[] = [];

  constructor(private energyService : EnergyService){

  }

  ngOnInit(){
  }
}