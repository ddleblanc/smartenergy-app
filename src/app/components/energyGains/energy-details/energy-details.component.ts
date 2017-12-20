import { Component, OnInit } from '@angular/core';
import { EnergyService } from '../../../services/energy.service';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-energy-details',
  templateUrl: './energy-details.component.html',
  styleUrls: ['./energy-details.component.css']
})
export class EnergyDetailsComponent implements OnInit {
  energy
  id:number

  constructor(
    private energyService: EnergyService, 
    private router: Router, 
    private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.energyService.GetEnergy(this.id)
        .then(energy => this.energy = energy)
        .catch(error => console.log(error));
      }
    )
  }

}
