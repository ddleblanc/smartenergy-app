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
  maandenData = [];


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

    private inverterService : InverterService
  ) { }

  ngOnInit(){
    var maandenData = [];
    var maanden = [1,2,3,4,5,6,7,8,9,10,11,12];
    maanden.forEach(maand =>{
      this.inverterService.GetAllMonthEnergy(maand)
      .then(maand => {
        var maandTotals = 0 ;
        maand.forEach(data => {
          maandTotals = maandTotals + data.energy;
        });
        if(maandTotals == null){
          maandTotals = 0;
        }
        maandenData.push(maandTotals);
        if(maandenData.length == maanden.length){
          console.log(maandenData);
          this.maandenData = maandenData;
          this.onLoaded()
        }
      })
      .catch(error => console.log(error))
    })

    
      
  }

  onLoaded() {
    this.chart = new Chart('line', {
      type: 'line',
      data: {
        labels: ["jan", "feb", "mar", "apr", "mei", "jun", "jul", "aug", "sep", "okt", "nov", "dec"],
        datasets: [
          {
            data: this.maandenData,
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

}
