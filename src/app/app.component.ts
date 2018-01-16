import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  user = {
    name: 'Arthur',
    age: 42
  };

  constructor() {
  }

}
