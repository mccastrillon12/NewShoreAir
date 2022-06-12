 
import { Component } from '@angular/core';
import { Journey } from './models/journey';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'NewShoreAir';
  journey : Journey; 
  loadingState : boolean = false;
  foundFlights : boolean = false;
  hasFlights : boolean = false;
  
}
