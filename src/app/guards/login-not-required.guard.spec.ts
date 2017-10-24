import { TestBed, async, inject } from '@angular/core/testing';

import { LoginNotRequiredGuard } from './login-not-required.guard';

describe('LoginNotRequiredGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginNotRequiredGuard]
    });
  });

  it('should ...', inject([LoginNotRequiredGuard], (guard: LoginNotRequiredGuard) => {
    expect(guard).toBeTruthy();
  }));
});
