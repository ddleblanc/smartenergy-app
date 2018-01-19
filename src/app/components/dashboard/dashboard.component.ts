import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';
import { trigger, state, style, transition, animate } from '@angular/animations'
import { InverterService } from '../../services/inverter.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('go', [
      state('invisible', style({
        position: 'relative'
      })),
      state('visible', style({
        margin: 'auto',
        width: '100%'
      })),
      transition('invisible <=> visible', animate('300ms ease-in'))
    ])
  ]
})
export class DashboardComponent implements OnInit {

  chart = [];
  state: string = 'invisible';
  masterData: string;
  showSelected: boolean;


  animate() {
    this.state = this.state == 'invisible' ? 'visible' : 'invisible';
  }

  constructor(private router: Router,
    private route: ActivatedRoute,
    private _inverterService: InverterService
  ) {

    this.showSelected = false;

    this._inverterService.Export().then(res => {
      this.masterData = JSON.stringify(res);

    })
  }

  ShowData() {
    this.showSelected = true;
  }

  HideData() {
    this.showSelected = false;
  }


  ngAfterViewInit() {



    this.chart = new Chart('line', {
      type: 'line',
      data: {
        labels: ["maandag", "dinsdag", "woensdag", "donderdag", "vrijdag"],
        datasets: [
          {
            data: [132, 110, 200, 245, 350],
            borderColor: "#BF0029",
            fill: true
          },
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }],
        }
      }
    });


    this.chart = new Chart('doughnut', {
      type: 'doughnut',
      data: {
        labels: ["Breda", "Tilburg", "Dordrecht"],
        datasets: [
          {
            data: [132, 110, 200],
            backgroundColor: ["#BF0029", "#7F001B", "#3F000D"],
            fill: true
          },
        ]
      },
      options: {
        legend: {
          display: true
        }
      }
    });

    console.log(this.chart);



  }

  ngOnInit() {

  }



}
