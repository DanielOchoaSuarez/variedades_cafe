/* tslint:disable:no-unused-variable */

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed, async, inject } from '@angular/core/testing';
import { CafeServiceService } from './cafe.service';

describe('Service: CafeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CafeServiceService],
    });
  });

  it('should ...', inject(
    [CafeServiceService],
    (service: CafeServiceService) => {
      expect(service).toBeTruthy();
    }
  ));
});
