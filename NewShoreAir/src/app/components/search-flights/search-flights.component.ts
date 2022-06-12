import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Flight } from 'src/app/models/flight';
import { Journey } from 'src/app/models/journey';
import { FlightPathService } from 'src/app/service/flight-path.service';
import { FlightService } from 'src/app/service/flight.service';


@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent implements OnInit {

  isDisable: boolean = true;
  flights : Flight[] = [];

  @Output()
  journey : EventEmitter<Journey> = new EventEmitter<Journey>();

  @Output()
  loadingState : EventEmitter<boolean> = new EventEmitter<boolean>()

  @Output()
  foundFlights : EventEmitter<boolean> = new EventEmitter<boolean>()

  @Output()
  hasFlights : EventEmitter<boolean> = new EventEmitter<boolean>()
  


  constructor( private _flightService : FlightService, private _flightPathService : FlightPathService) {

  }

  ngOnInit() {
  }


  validateDiferentFlights(destinationSearched:string, originSearched: string) {
    if(destinationSearched !== originSearched && originSearched.length === 3 && destinationSearched.length === 3 ){
      this.isDisable = false;
    }else {
      this.isDisable= true
    }
  }

  searchFlights(destinationSearched:string, originSearched: string){
    this.foundFlights.emit(false);
    this.loadingState.emit(true); 
    this.hasFlights.emit(false);     
    this._flightService.getFlights(0).subscribe(flightsResponse => {
      flightsResponse.forEach( flightResponse => {
         let flight = new Flight();
         flight.transport.flightCarrier = flightResponse.flightCarrier;
         flight.transport.flightNumber = flightResponse.flightNumber;
         flight.origin = flightResponse.departureStation;
         flight.destination = flightResponse.arrivalStation;
         flight.price = flightResponse.price;
         this.flights.push(flight);     
      });
      var flightPath = this._flightPathService.createFlightPath(originSearched, destinationSearched, this.flights)
        console.log(flightPath);
         if(Object.entries(flightPath).length === 0){
          this.hasFlights.emit(true);
         }
         this.journey.emit(flightPath);
         this.foundFlights.emit(true);
         this.loadingState.emit(false);
    });

  }


}
