import { Component, OnInit } from '@angular/core';
import { EnergyService } from '../../../services/energy.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-energy-edit',
  templateUrl: './energy-edit.component.html',
  styleUrls: ['./energy-edit.component.css']
})
export class EnergyEditComponent implements OnInit {

  id:number
  editMode = false
  dataForm: FormGroup;

  constructor(
    private energyService: EnergyService, 
    private router: Router, 
    private route : ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    );
  }

  private initForm() {
    let dataName = '';

    if (this.editMode) {
      this.energyService.GetEnergy(this.id)
      .then()
      .catch(error => console.log(error));
    }

    this.dataForm = new FormGroup({
      'name': new FormControl(dataName, Validators.required)
    });
  }

}
