import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  public currency = { symbol: 'USD', value: 1 }

  currency$: BehaviorSubject<any> = new BehaviorSubject<any>(this.currency)
  constructor( ) {}

  setCurrency(symbol: string, value: number): void {
    const data = {
      symbol,
      value
    }

    this.currency$.next(data)
  }


}
