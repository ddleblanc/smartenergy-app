import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/toPromise';
import { EnergyGain } from '../models/energyGain.model';
import { Subject } from 'rxjs';

@Injectable()
export class MasterDataService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private serverUrl = environment.serverUrl + '/master-data'; // URL to web api
    private AllEnergy : EnergyGain[] = []

    energyChanged = new Subject<EnergyGain[]>();

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

    public addEnergy(energy: EnergyGain,rawdata : string){
        this.http.post(this.serverUrl,{ headers : this.headers})
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
