import { Component, OnInit, Input} from '@angular/core';
import { EnergyService } from '../../../services/energy.service';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { InverterService } from '../../../services/inverter.service';
import { MasterDataService } from '../../../services/masterData.service';
import { EnergyGain } from '../../../models/energyGain.model';

@Component({
  selector: 'app-energy-edit',
  templateUrl: './energy-edit.component.html',
  styleUrls: ['./energy-edit.component.css']
})
export class EnergyEditComponent implements OnInit {

  id:number
  editMode = false;
  //sdataForm: FormGroup;
  valueArray = [];
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
        this.valueArray = this.getValues(this.energy);
        console.log(this.valueArray);
        this.Loaded = true;
      }
    );
  }

  onSubmit(){
    this.inverterService.GetSolarPanel(this.id)
    .then(data => {
      //this.masterdataService.addEnergy(this.dataForm.value,data._id);
    })
    .catch(error => console.log(error))
  }

  private getValues(obj){
    var valuesArray = []
    var propertysArray = []
    for(var x in obj){
      console.log(x);
      propertysArray.push(x);
    }

    propertysArray.forEach(p => {
      var value = obj[p]

      if(value === null){
        value = "null"
        valuesArray.push(value);
      }else if(typeof(value) == "object"){
        valuesArray.push(this.getValues(value))
      }else if(value === undefined){
      //doe niets
      }else{
        console.log("value = " + value);
        valuesArray.push(value);
      }
    })
    
    return valuesArray
  }

}