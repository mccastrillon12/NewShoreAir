import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/models/flight';
import { Journey } from 'src/app/models/journey';
import { FlightPathService } from 'src/app/services/flight-path.service';
import { FlightService } from 'src/app/services/flight.service';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent implements OnInit {

  journey : Journey;
  flights : Flight[] = [];

  constructor( private _flightService : FlightService, private _flightPathService : FlightPathService) { 

  }

  ngOnInit(): void {
  }

  BuscarVuelos(){
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
      var a = this._flightPathService.createFlightPath('MZL', "BCN", this.flights);
      console.log(a);
    });
   
  }

}
