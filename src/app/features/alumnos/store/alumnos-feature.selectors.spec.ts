import * as fromAlumnosFeature from './alumnos-feature.reducer';
import { selectAlumnosFeatureState } from './alumnos-feature.selectors';

describe('AlumnosFeature Selectors', () => {
  it('should select the feature state', () => {
    const result = selectAlumnosFeatureState({
      [fromAlumnosFeature.alumnosFeatureFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
