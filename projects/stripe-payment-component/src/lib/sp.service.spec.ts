import { TestBed } from '@angular/core/testing';

import { SpService } from './sp.service';

describe('SpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpService = TestBed.get(SpService);
    expect(service).toBeTruthy();
  });
});
