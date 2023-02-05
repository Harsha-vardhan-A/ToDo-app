import { TestBed } from '@angular/core/testing';

import { CommoninputsService } from './commoninputs.service';

describe('CommoninputsService', () => {
  let service: CommoninputsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommoninputsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
