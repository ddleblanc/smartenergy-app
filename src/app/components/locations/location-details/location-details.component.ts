import { Component, OnInit} from '@angular/core';

import { Location } from '../../../models/location.model';
import { LocationService } from '../../../services/location.service';
import { ActivatedRoute,Router, Params } from '@angular/router';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
})
export class LocationDetailComponent implements OnInit {
  location: Location;
  id: string;

  constructor(private locationService: LocationService,
              private route: ActivatedRoute,
              private router: Router
  ) {

  }
   

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.locationService.getLocation(this.id)
            .then(location => this.location = location)
            .catch(error => console.log(error));
        }
      );
  }
}