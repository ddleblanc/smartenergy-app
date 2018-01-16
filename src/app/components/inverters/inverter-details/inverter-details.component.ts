import { Component, OnInit } from '@angular/core';
import { InverterService } from '../../../services/inverter.service';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { Inverter } from '../../../models/inverter.model';

@Component({
  selector: 'app-inverter-details',
  templateUrl: './inverter-details.component.html',
  styleUrls: ['./inverter-details.component.css']
})
export class InverterDetailsComponent implements OnInit {
  inverter:Inverter
  id:string

  constructor(
    private inverterService: InverterService,
    private router: Router,
    private route : ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'] + '';
        this.inverterService.GetInverter(this.id)
        .then(inverter => {
          this.inverter = inverter
        })
        .catch(error => console.log(error));
      }
    )
  }

  onInverterData(){
    this.router.navigate(["energyGains"], {queryParams: {inverter: this.id}})
  }
}
