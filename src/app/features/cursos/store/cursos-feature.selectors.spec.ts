import * as fromCursosFeature from './cursos-feature.reducer';
import { selectCursosFeatureState } from './cursos-feature.selectors';

describe('CursosFeature Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCursosFeatureState({
      [fromCursosFeature.cursosFeatureFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
