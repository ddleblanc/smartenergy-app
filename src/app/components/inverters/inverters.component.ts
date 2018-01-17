import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { InverterService } from '../../services/inverter.service';
import { Location } from '../../models/location.model';
import { LocationService } from '../../services/location.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-inverters',
  templateUrl: './inverters.component.html',
  styleUrls: ['./inverters.component.css']
})
export class InvertersComponent implements OnInit {
  location: Location;
  subscription: Subscription;

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
        title: 'SN'
      }
    }
    };



  data= []
  Loaded = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _inverterService: InverterService,
    private locationService: LocationService
  ) {
  }

   onUserRowSelect(event): void {
       console.log(event.data._id);
       let id = event.data._id;
       this._inverterService.GetInverter(id)
       .then(inverter => { 
        this._inverterService.setCurrentInverter(inverter);
        this.router.navigate(['energyGains']),{relativeTo: this.route}
       })
       .catch(error => console.log(error))
       
   }

  ngOnInit(): void {
    if(this.locationService.getCurrentLocation()){
      
      var newdata = []
      this.location = this.locationService.getCurrentLocation()
      if(this.location.inverters.length == 0){
        this.Loaded = true;
      }
      console.log("inverter: " + this.location.inverters)
      var datalength = this.location.inverters.length;
      var loading = 0;
      this.location.inverters.forEach(inverterid => {
        this._inverterService.GetInverter(inverterid)
        .then(inverter => { 
          console.log("KK OPVALLEND")
          console.log(inverter);
          newdata.push(inverter);
          this.data = newdata;
          loading++
          if(loading == datalength){
            this.Loaded = true
          }
        })
        .catch(error => console.log(error))
      }
    )
    }else{
      this._inverterService.GetInverters().then(res => {
        this.data = res;
        console.log(this.data)
        this.Loaded = true;
      })

    }
  }

  ngOnDestroy() {
    this.locationService.setCurrentLocation(
      null
    );
   }



}
