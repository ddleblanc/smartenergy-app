import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-energyGains',
  templateUrl: './energyGains.component.html',
  styleUrls: ['./energyGains.component.css']
})
export class EnergyGainsComponent implements OnInit {

  title = 'Energy Gain';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

  }


}
