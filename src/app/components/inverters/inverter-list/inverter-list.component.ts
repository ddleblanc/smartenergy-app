import { Component, OnInit } from '@angular/core';
import { InverterService } from '../../../services/inverter.service';

@Component({
  selector: 'app-inverter-list',
  templateUrl: './inverter-list.component.html',
  styleUrls: ['./inverter-list.component.css']
})
export class InverterListComponent implements OnInit {

  inverters = []
  
    constructor(private inverterService: InverterService,) { }
  
    ngOnInit() {
      this.inverterService.GetInverters()
      .then(inverters => 
        { 
          this.inverters = inverters
          console.log(inverters);
        })
      .catch(error => console.log(error));
    }

}
