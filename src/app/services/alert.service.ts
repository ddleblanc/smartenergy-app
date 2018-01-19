import { Injectable } from '@angular/core';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { environment } from '../../environments/environment';
import 'rxjs/add/operator/toPromise';
import { Alert } from '../models/alert.model';

@Injectable()

export class AlertService {

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private serverUrl = environment.serverUrl + '/alerts'; // URL to web api
  private alerts = []
  private current: Alert = null

  constructor(private http: Http) { }

  setCurrentAlert(alert: Alert) {
    this.current = alert;
  }
  getCurrentAlert() {
    return this.current;
  }
  public GetAlerts(): Promise<any> {
    return this.http.get(this.serverUrl, { headers: this.headers })
      .toPromise()
      .then(response => {
        this.alerts = response.json();
        return this.alerts;
      })
      .catch(error => {
        return this.handleError(error);
      });
  }

  public getAlert(id: string):Promise<Alert> {
    console.log('alert ophalen met id');
    return this.http.get(this.serverUrl + '/' + id, { headers: this.headers })
      .toPromise()
      .then(response => {
          console.dir(response.json());
          return response.json() as Alert;
      })
      .catch( error => {
          return this.handleError(error);
      });
}


public deleteAlert(id: string){
  console.log("alert verwijderen");

  this.http.delete(this.serverUrl + "/" + id)
    .toPromise()
    .then( () => {
      console.log("alert verwijderd")
      this.GetAlerts()
      .then(
        alerts => {
          this.alerts = alerts
          this.alertsChanged.next(this.alerts.slice());
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
