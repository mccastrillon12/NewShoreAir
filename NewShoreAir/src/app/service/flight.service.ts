import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Flight } from '../models/flight';
import { FlightResponse } from '../models/flight-response';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  constructor(private http : HttpClient) { }

  getFlights(level : number){
    var url = `/api/flights/${level}`;
    return this.http.get<FlightResponse[]>(url);
  }

}


