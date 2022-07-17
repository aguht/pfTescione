import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { LoginFeatureEffects } from './login-feature.effects';

describe('LoginFeatureEffects', () => {
  let actions$: Observable<any>;
  let effects: LoginFeatureEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LoginFeatureEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(LoginFeatureEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
