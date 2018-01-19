import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { LocalDataSource } from 'ng2-smart-table';
import { LocationService } from '../../services/location.service';

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
      _id: {
        title: 'ID'
      },
      name: {
        title: 'Location'
      },
      adress: {
        title: 'Adress'
      }
      }
    };


  data = [];


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _locationService: LocationService
  ) { 
    this._locationService.getLocations()
    .then(res => {
      this.data = res;
      console.log(this.data)
    })
  }

  onUserRowSelect(event): void {
    console.log(event.data._id);
    let id = event.data._id;
    this._locationService.getLocation(id)
    .then(location => { 
     this._locationService.setCurrentLocation(location);
     this.router.navigate(['inverters']),{relativeTo: this.route}
    })
    .catch(error => console.log(error))
    }

  ngOnInit(): void {

  }
}

