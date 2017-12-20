import { Component, OnInit } from '@angular/core';
import { EnergyService } from '../../../services/energy.service';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-energy-list',
  templateUrl: './energy-list.component.html',
  styleUrls: ['./energy-list.component.css']
})
export class EnergyListComponent implements OnInit {
  AllEnergy = []

  constructor(private EnergyService: EnergyService,) { }

  ngOnInit() {
    this.EnergyService.GetAllEnergy()
    .then(AllData => 
      { 
        this.AllEnergy = AllData
        console.log(AllData);
        this.AllEnergy.forEach(data => {
          console.log("mongo-id = " + data._id)
        })
      })
    .catch(error => console.log(error));
  }

}
