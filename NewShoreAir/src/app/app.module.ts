import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchFlightsComponent } from './components/search-flights/search-flights.component';
import { InformationComponent } from './components/information/information.component';

import { TripsComponent } from './components/trips/trips.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FlightComponent } from './components/flight/flight.component';
import { LoadingComponent } from './components/loading/loading.component';
import { FooterComponent } from './components/footer/footer.component';
import { CurrencyComponent } from './components/currency/currency.component';

import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { CurrencyChangePipe } from './pipe/currency-change.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    SearchFlightsComponent,
    InformationComponent,

    TripsComponent,
    NavbarComponent,
    FlightComponent,
    LoadingComponent,
    FooterComponent,
    CurrencyComponent,
    FormComponent,
    CurrencyChangePipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
