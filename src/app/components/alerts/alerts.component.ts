import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css']
})
export class AlertsComponent implements OnInit {

  title = 'Alerts';

  settings = {
  columns: {
    id: {
      title: 'ID'
    },
    name: {
      title: 'Warning Name'
     }
    }
  };


data = [
  {
    id: 1,
    name: "Error 401"
  },
  {
    id: 2,
    name: "Error 306"
  }
];


  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

  }


}
