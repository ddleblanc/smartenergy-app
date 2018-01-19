import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/toPromise';
import { Location } from '../models/location.model';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class LocationService {

    private headers = new Headers({ 'Content-Type': 'application/json' });
    private serverUrl = environment.serverUrl + '/locations'; // URL to web api
    private locations = []
    private current:Location = null

    locationsChanged = new Subject<Location[]>();

    constructor(private http: Http) { }

    getCurrentLocation(){
      return this.current;
    }

    setCurrentLocation(location: Location){
      this.current = location;
    }

    public getLocations(): Promise<any>{
      return this.http.get(this.serverUrl, { headers: this.headers })
      .toPromise()
      .then(response => {
        this.locations = response.json();
        return this.locations;
      })
      .catch(error => {
        return this.handleError(error);
      });
    }

    public getLocation(id: string):Promise<Location> {
      console.log('locatie ophalen met id');
      return this.http.get(this.serverUrl + '/' + id, { headers: this.headers })
        .toPromise()
        .then(response => {
            console.dir(response.json());
            return response.json() as Location;
        })
        .catch( error => {
            return this.handleError(error);
        });
  }

  public addLocation(location:Location){
    console.log(location);
    this.http.post(this.serverUrl,{location})
    .toPromise()
    .then(response => {
      this.getLocations()
      .then((locations) => {
        this.locationsChanged.next(locations.slice());
      })
      .catch(error => console.log(error))
    })
    .catch(error => console.log(error))
  }

  public editLocation(location : Location, id:String){
    this.http.put(this.serverUrl + "/" + id ,{location})
    .toPromise()
    .then(response => {
      this.getLocations()
      .then((locations) => {
        this.locationsChanged.next(locations.slice());
      })
      .catch(error => console.log(error))
    })
    .catch(error => console.log(error))
  }

  public deleteLocation(id: string){
    console.log("locatie verwijderen");
    
    this.http.delete(this.serverUrl + "/" + id)
      .toPromise()
      .then( () => {
        console.log("locatie verwijderd")
        this.getLocations()
        .then(
          locations => {
            this.locations = locations
            this.locationsChanged.next(this.locations.slice());
          }
        )
        .catch(error => console.log(error));
    })
      .catch( error => { return this.handleError(error) } );
  }
  


    private handleError(error: any): Promise<any> {
        console.log('handleError');
        return Promise.reject(error.message || error);
      }
}
