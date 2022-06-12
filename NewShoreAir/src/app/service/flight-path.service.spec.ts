import { TestBed } from '@angular/core/testing';

import { FlightPathService } from './flight-path.service';

describe('FlightPathService', () => {
  let service: FlightPathService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlightPathService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
