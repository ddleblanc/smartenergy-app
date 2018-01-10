import { Component, OnInit, Input } from '@angular/core';
import { EnergyService } from '../../../services/energy.service';
import { forEach } from '@angular/router/src/utils/collection';
import { InverterService } from '../../../services/inverter.service';

@Component({
  selector: 'app-energy-list',
  templateUrl: './energy-list.component.html',
  styleUrls: ['./energy-list.component.css']
})
export class EnergyListComponent implements OnInit {
  @Input() inverter
  ids = [];
  AllEnergy = [];
  loaded = false

  constructor(
    private energyService: EnergyService,
    private inverterService: InverterService) { }

  ngOnInit() {
    this.inverterService.GetSolarPanels(this.inverter)
    .then(AllData => 
      { 
        this.ids = AllData;
        console.log(AllData);
        this.ids.forEach(id => {
          this.energyService.GetEnergyById(id)
          .then(data => {
            this.AllEnergy.push(data);
            console.log("mongo-id = " + data._id)
          })
          .catch(error => console.log(error))
        })
      })
    .catch(error => console.log(error));
  }

}
