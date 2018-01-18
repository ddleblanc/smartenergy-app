import { Component, OnInit, Input } from '@angular/core';
import { VariantService } from '../../../services/variant.service';

@Component({
  selector: 'app-masterdata-list',
  templateUrl: './masterdata-list.component.html',
  styleUrls: ['./masterdata-list.component.css']
})
export class MasterdataListComponent implements OnInit {
  @Input() propertyVariants;

  constructor(private variantService:VariantService) { }

  ngOnInit() {
    console.log(this.propertyVariants);
  }

  onSelect(variant:String){
    this.variantService.setCurrentVariant(variant);
  }
}
