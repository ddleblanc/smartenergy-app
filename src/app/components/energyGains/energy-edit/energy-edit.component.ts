import { Component, OnInit } from '@angular/core';
import { EnergyService } from '../../../services/energy.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InverterService } from '../../../services/inverter.service';

@Component({
  selector: 'app-energy-edit',
  templateUrl: './energy-edit.component.html',
  styleUrls: ['./energy-edit.component.css']
})
export class EnergyEditComponent implements OnInit {

  id:number
  editMode = false;
  dataForm: FormGroup;

  constructor(
    private energyService: EnergyService,
    private inverterService: InverterService, 
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
    let dataEnergy = '';
    let dataTime = '';

    if (this.editMode) {
      this.inverterService.GetSolarPanel(this.id)
      .then()
      .catch(error => console.log(error));
    }

    this.dataForm = new FormGroup({
      'name': new FormControl(dataName, Validators.required),
      'energy': new FormControl(dataEnergy, Validators.required),
      'time': new FormControl(dataTime, Validators.required)
    });
  }

}
