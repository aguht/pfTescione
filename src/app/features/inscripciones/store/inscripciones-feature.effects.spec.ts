import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { InscripcionesFeatureEffects } from './inscripciones-feature.effects';

describe('InscripcionesFeatureEffects', () => {
  let actions$: Observable<any>;
  let effects: InscripcionesFeatureEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        InscripcionesFeatureEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(InscripcionesFeatureEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
