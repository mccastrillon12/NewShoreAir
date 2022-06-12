import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


able: boolean = true;

  constructor() {

  }

  ngOnInit() {
  }


  validateDiferentFlights(destinationSearched:string, originSearched: string) {

  if(destinationSearched !== originSearched && originSearched.length === 3 && destinationSearched.length === 3 ){
    this.able = false;

  }else {
    this.able= true
  }

  }


}
