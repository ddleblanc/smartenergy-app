import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../../services/location.service';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '../../../models/location.model';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.css']
})
export class LocationListComponent implements OnInit, OnDestroy {
  locations: Location[];
  subscription: Subscription;
  
    constructor(private locationService: LocationService,) { }
  
    ngOnInit(){
      this.subscription = this.locationService.locationsChanged.subscribe(
          (locations : Location[]) => {
              this.locations = locations;
          }
      );
    this.locationService.getLocations()
      .then(locations => {
          this.locations = locations
    })
      .catch(error => console.log(error));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
   }

}