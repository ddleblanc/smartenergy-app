import { Component, OnInit, Input } from '@angular/core';
import { InverterService } from '../../../services/inverter.service';
import { Params, Router, ActivatedRoute } from '@angular/router';
import { Inverter } from '../../../models/inverter.model';

@Component({
  selector: 'app-inverter-details',
  templateUrl: './inverter-details.component.html',
  styleUrls: ['./inverter-details.component.css']
})
export class InverterDetailsComponent implements OnInit {
  @Input() inverter:Inverter
  id:string
  Loaded = false;
  totalEnergy = 0;
  Januari = 0; 


  constructor(
    private inverterService: InverterService,
    private router: Router,
    private route : ActivatedRoute) { }

  ngOnInit() {
    this.getAllData();
  }

  getAllData(){
    Promise.all([
      //get totaal
      this.inverterService.GetTotalEnergy(this.inverter._id)
      .then(total => { 
        this.totalEnergy = total;
      })
      .catch(error => console.log(error)),
      //get januari totaal
      this.inverterService.GetMonthEnergy(this.inverter._id,1)
      .then(januari => {
        var januariTotals = 0 ;
        januari.forEach(data => {
          januariTotals = januariTotals + data.energy;
        });
        this.Januari = januariTotals;
      })
      .catch(error => console.log(error))
    ])
    //alles geladen
    .then(klaar => {
      this.Loaded = true
    })
    .catch(error => console.log(error));
  }

  onInverterData(){
    this.router.navigate(["energyGains"], {queryParams: {inverter: this.id}})
  }
}
