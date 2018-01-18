import { Component, OnInit, Input } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VariantService } from '../../../services/variant.service';

@Component({
  selector: 'app-masterdata-edit',
  templateUrl: './masterdata-edit.component.html',
  styleUrls: ['./masterdata-edit.component.css']
})
export class MasterdataEditComponent implements OnInit {
  id:number
  editMode = false;
  configForm: FormGroup;
  private variant;

  constructor(private variantService: VariantService) { }

  ngOnInit() {
    this.variant = this.variantService.getCurrentVariant();
  }

  onSubmit(){
    this.variantService.addVariant(this.configForm.value);
  }

  private initForm() {
      let dataName = '';
      let dataTime = '';
      let dataEnergy = '';
      let variant = this.variant;

      this.configForm = new FormGroup({
        'name': new FormControl(dataName, Validators.required),
        'time': new FormControl(dataTime, Validators.required),
        'energy': new FormControl(dataEnergy, Validators.required),
        'variant': new FormControl(variant, Validators.required)
      });
  }
}
