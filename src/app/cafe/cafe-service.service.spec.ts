/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CafeServiceService } from './cafe-service.service';

describe('Service: CafeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CafeServiceService]
    });
  });

  it('should ...', inject([CafeServiceService], (service: CafeServiceService) => {
    expect(service).toBeTruthy();
  }));
});
