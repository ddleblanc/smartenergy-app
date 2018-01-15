import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css',
]
})
export class LocationsComponent implements OnInit {


    settings = {
      add: {
      addButtonContent: '<i class="fa fa-plus-square fa-3x faAddStyle" aria-hidden="true"></i>',
      createButtonContent: '<i class="fa fa-check-square fa-2x faAddStyle" aria-hidden="true"></i>',
      cancelButtonContent: '<i class="fa fa-window-close fa-2x faDeleteStyle" aria-hidden="true"></i>',
    },
      edit: {
      editButtonContent: '<i class="fa fa-pencil-square fa-2x faEditStyle" aria-hidden="true"></i>',
      saveButtonContent: '<i class="fa fa-check-square fa-2x faAddStyle" aria-hidden="true"></i>',
      cancelButtonContent: '<i class="fa fa-window-close fa-2x faDeleteStyle" aria-hidden="true"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="fa fa-window-close fa-2x faDeleteStyle" aria-hidden="true"></i>',
      confirmDelete: false,
    },
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Location'
      },
      inverters: {
        title: 'Inverters',
        

       }
      }
    };


  data = [
    {
      id: 1,
      name: "Avans Breda",
      inverters: "Inverter1"
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
