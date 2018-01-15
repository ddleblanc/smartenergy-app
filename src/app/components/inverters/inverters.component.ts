import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@Component({
  selector: 'app-inverters',
  templateUrl: './inverters.component.html',
  styleUrls: ['./inverters.component.css']
})
export class InvertersComponent implements OnInit {

    settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Name'
       }
      }
    };


  data = [
    {
      id: 1,
      name: "Robo9k"
    },
    {
      id: 2,
      name: "Robo8k"
    }
  ];


  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

  }


}
