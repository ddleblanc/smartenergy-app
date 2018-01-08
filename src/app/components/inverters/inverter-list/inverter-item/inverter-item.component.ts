import { Component, OnInit, Input } from '@angular/core';
import { Inverter } from '../../../../models/inverter.model';

@Component({
  selector: 'app-inverter-item',
  templateUrl: './inverter-item.component.html',
  styleUrls: ['./inverter-item.component.css']
})
export class InverterItemComponent implements OnInit {
  @Input() inverter:Inverter
  @Input() index:number

  constructor() { }

  ngOnInit() {
  }

}
