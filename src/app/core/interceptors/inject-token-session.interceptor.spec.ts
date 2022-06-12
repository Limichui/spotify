import { TestBed } from '@angular/core/testing';

import { InjectTokenSessionInterceptor } from './inject-token-session.interceptor';

describe('InjectTokenSessionInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      InjectTokenSessionInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: InjectTokenSessionInterceptor = TestBed.inject(InjectTokenSessionInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
