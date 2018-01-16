import { Component, OnInit } from '@angular/core';
import { EnergyService } from '../../../services/energy.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { InverterService } from '../../../services/inverter.service';

@Component({
  selector: 'app-energy-details',
  templateUrl: './energy-details.component.html',
  styleUrls: ['./energy-details.component.css']
})
export class EnergyDetailsComponent implements OnInit {
  energy = null;
  id:number
  Loaded = false;

  constructor(
    private energyService: EnergyService,
    private inverterService: InverterService, 
    private router: Router, 
    private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.inverterService.GetSolarPanel(this.id)
        .then(energy => {
          this.energy = energy;
          this.Loaded = true;
        })
        .catch(error => console.log(error));
      }
    )
  }

}
