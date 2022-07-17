import * as fromInscripcionesFeature from './inscripciones-feature.reducer';
import { selectInscripcionesFeatureState } from './inscripciones-feature.selectors';

describe('InscripcionesFeature Selectors', () => {
  it('should select the feature state', () => {
    const result = selectInscripcionesFeatureState({
      [fromInscripcionesFeature.inscripcionesFeatureFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
