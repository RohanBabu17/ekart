import { TestBed } from '@angular/core/testing';

import { EcartserviceService } from './ecartservice.service';

describe('EcartserviceService', () => {
  let service: EcartserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcartserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
