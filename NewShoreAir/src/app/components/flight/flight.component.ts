import { Component, Input, OnInit } from '@angular/core';
import { Journey } from 'src/app/models/journey';
import { CurrencyService } from 'src/app/service/currency.service';


@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  @Input()
  journey : Journey


  constructor(private currencyService: CurrencyService) { }

  ngOnInit(): void {

  }

  setCurrency(symbol: string, value: number): void {
    this.currencyService.setCurrency(symbol, value)
  }

  
}
