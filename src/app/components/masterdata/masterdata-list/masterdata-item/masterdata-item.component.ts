import { Component, OnInit, Input } from '@angular/core';
import { VariantService } from '../../../../services/variant.service';

@Component({
  selector: 'app-masterdata-item',
  templateUrl: './masterdata-item.component.html',
  styleUrls: ['./masterdata-item.component.css']
})
export class MasterdataItemComponent implements OnInit {
  @Input() variant:String;
  @Input() index:number

  constructor() { }

  ngOnInit() {
  }

}
