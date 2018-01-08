import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EnergyService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private serverUrl = environment.serverUrl + '/solar-panels'; // URL to web api
    private AllEnergy = []

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

    private handleError(error: any): Promise<any> {
        console.log('handleError');
        return Promise.reject(error.message || error);
      }
}
