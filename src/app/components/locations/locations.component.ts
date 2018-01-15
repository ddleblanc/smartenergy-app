import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {


    settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Location'
       }
      }
    };


  data = [
    {
      id: 1,
      name: "Avans Breda"
    },
    {
      id: 2,
      name: "Avans Nunspeet"
    }
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

  }


}
