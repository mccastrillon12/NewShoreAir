import { Injectable } from '@angular/core';
import { Flight } from '../models/flight';
import { Journey } from '../models/journey';

@Injectable({
  providedIn: 'root'
})
export class FlightPathService {

  journey : Journey;
  
  constructor() { }
  
  createFlightPath(origin : string, destination: string, flights : Flight[]){
    this.journey = new Journey;
    var possibleFlights = flights.filter(flight => flight.origin == origin);

    if(possibleFlights.length == 0){    
      this.journey.flights.shift();
      delete this.journey.flights;
      return this.journey;
    }

    for(let possibleFlight of possibleFlights){
      this.journey.flights.push(possibleFlight);
      this.calculatePath(destination, possibleFlight, flights);
      if(this.journey.flights[1].origin == origin && this.journey.flights[this.journey.flights.length-1].destination == destination ){
        break;
      }else{
        this.journey.flights.splice(0, this.journey.flights.length-1 )
      }
    }
    this.journey.origin = origin;
    this.journey.destination = destination;
    return this.calculateJourneyValue(this.journey);
  }

  calculatePath(destination: string, possibleFlight : Flight, flights : Flight[] ){
    var currentFlight = possibleFlight;
    for(var i = 0; i < flights.length; i++){
      if(currentFlight.destination == flights[i].origin ){
        this.journey.flights.push(flights[i]);
        if(flights[i].destination == destination){
          return this.journey;
        }
        currentFlight = flights[i];
        this.journey = this.calculatePath(destination, currentFlight, flights);   
        return this.journey
      }
    }
    return this.journey
  }

  calculateJourneyValue(journey : Journey){
    journey.flights.shift();
    var journeyValue = journey.flights.reduce((accumulator, currentValue) => {
      return accumulator += currentValue.price;
    }, 0);
    journey.price = journeyValue
    return journey;
  }

}
