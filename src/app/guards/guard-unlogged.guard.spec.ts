import { TestBed } from '@angular/core/testing';

import { GuardUnloggedGuard } from './guard-unlogged.guard';

describe('GuardUnloggedGuard', () => {
  let guard: GuardUnloggedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardUnloggedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
