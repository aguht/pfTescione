import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AlumnosFeatureEffects } from './alumnos-feature.effects';

describe('AlumnosFeatureEffects', () => {
  let actions$: Observable<any>;
  let effects: AlumnosFeatureEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AlumnosFeatureEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(AlumnosFeatureEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
