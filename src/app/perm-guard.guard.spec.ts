import { TestBed } from '@angular/core/testing';

import { PermGuardGuard } from './perm-guard.guard';

describe('PermGuardGuard', () => {
  let guard: PermGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PermGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
