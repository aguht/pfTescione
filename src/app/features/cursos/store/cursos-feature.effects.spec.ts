import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CursosFeatureEffects } from './cursos-feature.effects';

describe('CursosFeatureEffects', () => {
  let actions$: Observable<any>;
  let effects: CursosFeatureEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CursosFeatureEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CursosFeatureEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
