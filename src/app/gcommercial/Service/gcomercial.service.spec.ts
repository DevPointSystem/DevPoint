import { TestBed } from '@angular/core/testing';

import { GcomercialService } from './gcomercial.service';

describe('GcomercialService', () => {
  let service: GcomercialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GcomercialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
