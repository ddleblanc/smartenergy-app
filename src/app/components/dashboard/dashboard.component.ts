import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  chart = [];

  constructor(private router: Router,
  private route: ActivatedRoute) { }

  ngAfterViewInit(){



        this.chart = new Chart('line', {
              type: 'line',
              data: {
                labels: ["maandag", "dinsdag","woensdag","donderdag","vrijdag"],
                datasets: [
                  {
                    data: [132,110,200,245, 350],
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
                    labels: ["Breda", "Tilburg","Dordrecht"],
                    datasets: [
                      {
                        data: [132,110,200],
                        backgroundColor: ["#BF0029","#7F001B","#3F000D"],
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
