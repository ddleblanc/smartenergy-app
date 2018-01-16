import { Component, OnInit, Input } from '@angular/core';
import { Location } from '../../../../models/location.model';

@Component({
  selector: 'app-location-item',
  templateUrl: './location-item.component.html',
  styleUrls: ['./location-item.component.css']
})
export class LocationItemComponent implements OnInit {
  @Input() location: Location
  @Input() index:number

  constructor() { }

  ngOnInit() {
  }

}
