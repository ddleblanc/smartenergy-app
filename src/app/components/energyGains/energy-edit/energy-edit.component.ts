import { Component, OnInit, Input} from '@angular/core';
import { EnergyService } from '../../../services/energy.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InverterService } from '../../../services/inverter.service';
import { MasterDataService } from '../../../services/masterData.service';
import { MasterData } from '../../../models/masterData.model'; 

@Component({
  selector: 'app-energy-edit',
  templateUrl: './energy-edit.component.html',
  styleUrls: ['./energy-edit.component.css']
})
export class EnergyEditComponent implements OnInit {

  id:number
  editMode = false;
  dataForm: FormGroup;
  @Input() energy = null;
  Loaded = false;

  constructor(
    private energyService: EnergyService,
    private inverterService: InverterService, 
    private masterdataService: MasterDataService,
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
        this.Loaded = true;
      }
    );
  }

  onSubmit(){
    this.inverterService.GetSolarPanel(this.id)
    .then(data => {
      this.masterdataService.addEnergy(this.dataForm.value,this.inverterService.getCurrentInverter());
      this.router.navigate(['energyGains']);
    })
    .catch(error => console.log(error))
  }

  private initForm() {
      let dataName = '';
      let dataTime = '';
      let dataEnergy = '';
      let dataRaw = this.energy;

      this.dataForm = new FormGroup({
        'name': new FormControl(dataName, Validators.required),
        'time': new FormControl(dataTime, Validators.required),
        'energy': new FormControl(dataEnergy, Validators.required),
        'raw': new FormControl(dataRaw)
      });
  }
}