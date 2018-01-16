import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/toPromise';
import { MasterData } from '../models/masterData.model';
import { Subject } from 'rxjs';
import { Inverter } from '../models/inverter.model';

@Injectable()
export class MasterDataService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private serverUrl = environment.serverUrl + '/master-data'; // URL to web api
    private AllEnergy : MasterData[] = []

    energyChanged = new Subject<MasterData[]>();

    constructor(private http: Http) { }

    public GetAllEnergy(): Promise<any>{
      return this.http.get(this.serverUrl, { headers: this.headers })
      .toPromise()
      .then(response => {
        this.AllEnergy = response.json();
        return this.AllEnergy;
      })
      .catch(error => {
        return this.handleError(error);
      });
  }
    
    public GetEnergy(index:number): Promise<any>{
        return this.http.get(this.serverUrl + "/" + this.AllEnergy[index]._id, { headers: this.headers })
        .toPromise()
        .then(response => {
          var energy = response.json();
          return energy;
        })
        .catch(error => {
          return this.handleError(error);
        });
    }

    public GetEnergyById(id:String): Promise<any>{
      return this.http.get(this.serverUrl + "/" + id, { headers: this.headers })
      .toPromise()
      .then(response => {
        var energy = response.json();
        return energy;
      })
      .catch(error => {
        return this.handleError(error);
      });
    }

    public addEnergy(energy: MasterData,inverter : Inverter){
      console.log(energy);
        this.http.post(this.serverUrl + "/" + inverter.SN ,{ name : energy.name, time : energy.time, energy : energy.energy, raw : energy.raw })
        .toPromise()
        .then(energy => {
            this.AllEnergy = energy.json()
            this.energyChanged.next(this.AllEnergy.slice());
          } )
        .catch(error => console.log(error))
    }

    private handleError(error: any): Promise<any> {
        console.log('handleError');
        return Promise.reject(error.message || error);
      }
}
