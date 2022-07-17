import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { UsuariosFeatureEffects } from './usuarios-feature.effects';

describe('UsuariosFeatureEffects', () => {
  let actions$: Observable<any>;
  let effects: UsuariosFeatureEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UsuariosFeatureEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(UsuariosFeatureEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
