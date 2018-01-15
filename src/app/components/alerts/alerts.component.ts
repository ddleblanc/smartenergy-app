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
