import { TestBed } from '@angular/core/testing';

import { CatGuard } from './cat.guard';

describe('CatGuard', () => {
  let guard: CatGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CatGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
