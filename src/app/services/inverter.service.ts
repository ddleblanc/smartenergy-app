import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/toPromise';
import { Inverter } from '../models/inverter.model';

@Injectable()
export class InverterService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private serverUrl = environment.serverUrl + '/inverters'; // URL to web api
    private inverters = []
    private solarPanels = []
    private current:Inverter = null

    constructor(private http: Http) { }

    setCurrentInverter(inverter: Inverter){
      this.current = inverter;
    }

    getCurrentInverter(){
      return this.current;
    }

    public Export(): Promise<any>{
      return this.http.get(this.serverUrl + "/export", { headers: this.headers })
      .toPromise()
      .then(response => {
        return response.json();
      })
      .catch(error => {
        return this.handleError(error);
      });
    }

    public GetInverters(): Promise<any>{
      return this.http.get(this.serverUrl, { headers: this.headers })
      .toPromise()
      .then(response => {
        this.inverters = response.json();
        return this.inverters;
      })
      .catch(error => {
        return this.handleError(error);
      });
    }

    public GetInverter(id:string): Promise<any>{
        return this.http.get(this.serverUrl + "/" + id, { headers: this.headers })
        .toPromise()
        .then(response => {
          var inverter = response.json();
          return inverter;
        })
        .catch(error => {
          return this.handleError(error);
        });
    }

    public GetSolarPanels(id: string):Promise<any>{
        return this.http.get(this.serverUrl + "/" + id + "/solar-panels", { headers: this.headers})
        .toPromise()
        .then(response => {
            this.solarPanels = response.json();
            console.log(this.solarPanels)
            return this.solarPanels;
        })
        .catch(error => console.log(error));
    }

    public GetSolarPanel(index:number):Promise<any>{
      console.log(this.solarPanels[index]);
      return this.http.get(environment.serverUrl + "/solar-panels/" + this.solarPanels[index] , { headers: this.headers})
      .toPromise()
      .then(response => {
          return response.json();
      })
      .catch(error => console.log(error));
    }

    public GetTotalEnergy(id:string):Promise<any>{
      return this.http.get(this.serverUrl+ "/" + id + "/total", { headers: this.headers})
      .toPromise()
      .then(response => {
        return response.json();
      })
      .catch(error => console.log(error));
    }

    public GetMonthEnergy(id:string,month: number):Promise<any>{
      return this.http.get(this.serverUrl+ "/" + id + "/energy/" + month, { headers: this.headers})
      .toPromise()
      .then(response => {
        return response.json();
      })
      .catch(error => console.log(error));
    }
    
    private handleError(error: any): Promise<any> {
        console.log('handleError');
        return Promise.reject(error.message || error);
      }
}
