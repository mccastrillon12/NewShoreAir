import { OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { Subscription } from 'rxjs';
import { CurrencyService } from '../service/currency.service';
@Pipe({
  name: 'currencyChange',
  pure: false
})
export class CurrencyChangePipe implements PipeTransform, OnDestroy {

  public value: string = ''
  private listen$: Array<Subscription> = []

  constructor(private currencyService: CurrencyService) {

  }
  transform(valueIn: number): any {

    if(isNaN(valueIn)){
      return
    }

    const observer1$ = this.currencyService.currency$
      .subscribe(({ symbol, value }) => {
        this.value = `${(valueIn * value).toFixed(0)} ${symbol}`
      })

    this.listen$ = [observer1$]

    return this.value
  }

  ngOnDestroy(): void {
    this.listen$.forEach(a => a.unsubscribe())
  }

}
