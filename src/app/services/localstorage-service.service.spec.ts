import { TestBed } from '@angular/core/testing';

import { LocalstorageServiceService } from './localstorage-service.service';

describe('LocalstorageServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocalstorageServiceService = TestBed.get(LocalstorageServiceService);
    expect(service).toBeTruthy();
  });
});
