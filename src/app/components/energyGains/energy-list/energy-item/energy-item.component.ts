import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-energy-item',
  templateUrl: './energy-item.component.html',
  styleUrls: ['./energy-item.component.css']
})
export class EnergyItemComponent implements OnInit {
  @Input() energy
  @Input() index

  constructor() { }

  ngOnInit() {
    console.log(this.energy)
  }

}
