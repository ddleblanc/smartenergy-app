import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/toPromise';
import JSONPath from 'jsonpath-plus';

@Injectable()
export class EnergyService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private serverUrl = environment.serverUrl + '/solar-panels'; // URL to web api
    private AllEnergy = []
    private jsonpaths = [];
    private propertyVariants = [];
    private loadedRawData =[]

    constructor(private http: Http) {
    }

    public LoadAllRawData(){
      if(this.loadedRawData.length != 0){
        console.log(this.loadedRawData);
        this.loadedRawData.forEach(rawdata => {
          if(this.propertyVariants.length == 0){
            this.propertyVariants.push("" + this.getPropertys(rawdata)); 
          }else{
            if(this.propertyVariants.includes("" + this.getPropertys(rawdata))){
              //doe niks
            }else{
              this.propertyVariants.push("" + this.getPropertys(rawdata));
            }
          }
        });
        console.log("property variants    : ");
        console.log(this.propertyVariants);
      }
    }

    getPropertyVariants():Promise<any>{
      return this.GetAllEnergy()
      .then(allEnergy => {
        this.loadedRawData = allEnergy;
        this.LoadAllRawData();
        return this.propertyVariants;
      })
      .catch(error => console.log(error))
      
    }

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

      getPropertys(obj){
        var propertyArray = []
          for(var x in obj){
            if( typeof(x) == "object"){
              propertyArray.push(this.getPropertys(x));
            }
            propertyArray.push(x);
          }
        return propertyArray;
      }
}
