import { TestBed } from '@angular/core/testing';

import { BasicAuthenticationService } from './hardcoded-authentication.service';

describe('BasicAuthenticationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasicAuthenticationService = TestBed.get(BasicAuthenticationService);
    expect(service).toBeTruthy();
  });
});
