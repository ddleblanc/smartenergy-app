import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { InverterService } from '../../services/inverter.service'

@Component({
  selector: 'app-inverters',
  templateUrl: './inverters.component.html',
  styleUrls: ['./inverters.component.css']
})
export class InvertersComponent implements OnInit {

    settings = {
      mode : 'extrenal',
      actions: { columnTitle: ''},
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
      DeviceModel: {
        title: 'Model'
      },
      DeviceName: {
        title: 'Name'
      },
      DisplaySoftwareVersion: {
        title: 'Software Version'
      },
      Location: {
        title: 'Location'
      },
      MasterControlSoftwareVersion: {
        title: 'Master Control Software Version'
      },
      SN: {
        title: 'Location'
      }
    }
    };



  data= []



  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _inverterService: InverterService
  ) {

    this._inverterService.GetInverters().then(res => {
      this.data = res;
      console.log(this.data)
})

   }


  ngOnInit(): void {



  }


}
