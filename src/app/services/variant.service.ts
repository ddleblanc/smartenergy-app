import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/toPromise';
import { MasterData } from '../models/masterData.model';
import { Subject } from 'rxjs';
import { Inverter } from '../models/inverter.model';
import { Variant } from '../models/variant.model';

@Injectable()
export class VariantService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private serverUrl = environment.serverUrl + '/variant'; // URL to web api
    private AllVariants;
    private CurrentVariant:String;

    variantsChanged = new Subject<String[]>();


    constructor(private http: Http) { }

    public setCurrentVariant(variant:String){
        this.CurrentVariant = variant;
    }

    public getCurrentVariant(){
        return this.CurrentVariant;
    }

    public GetAllVariants(): Promise<any>{
        return this.http.get(this.serverUrl, { headers: this.headers })
        .toPromise()
        .then(response => {
          this.AllVariants = response.json();
          return this.AllVariants;
        })
        .catch(error => {
          return this.handleError(error);
        });
    }

    public addVariant(variant:Variant){
        console.log("gelukt")
        //   this.http.post(this.serverUrl + "/config",{ variant })
        //   .toPromise()
        //   .then(variant => {
        //       this.AllVariants = variant.json()
        //       this.variantsChanged.next(this.AllVariants.slice());
        //     } )
        //   .catch(error => console.log(error))
    }

    private handleError(error: any): Promise<any> {
        console.log('handleError');
        return Promise.reject(error.message || error);
      }
}
