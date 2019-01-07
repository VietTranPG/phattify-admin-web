import { TestBed, inject } from '@angular/core/testing';

import { ValidateExtendService } from './validate-extend.service';

describe('ValidateExtendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidateExtendService]
    });
  });

  it('should be created', inject([ValidateExtendService], (service: ValidateExtendService) => {
    expect(service).toBeTruthy();
  }));
});
