import { Component, OnInit } from '@angular/core';
import { EnergyService } from '../../services/energy.service';

@Component({
  selector: 'app-masterdata',
  templateUrl: './masterdata.component.html',
  styleUrls: ['./masterdata.component.css']
})
export class MasterdataComponent implements OnInit {
  propertyVariants = [];
  loaded = false;

  constructor(private energyService: EnergyService) { }

  ngOnInit() {
    this.energyService.getPropertyVariants()
    .then(propertyVariants => {
      this.propertyVariants = propertyVariants
      this.loaded = true;
    })
  }

}
