import { TestBed } from '@angular/core/testing';

import { ResultServiceService } from './result-service.service';

describe('ResultServiceService', () => {
  let service: ResultServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
