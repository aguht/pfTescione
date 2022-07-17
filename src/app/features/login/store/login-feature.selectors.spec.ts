import * as fromLoginFeature from './login-feature.reducer';
import { selectLoginFeatureState } from './login-feature.selectors';

describe('LoginFeature Selectors', () => {
  it('should select the feature state', () => {
    const result = selectLoginFeatureState({
      [fromLoginFeature.loginFeatureFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
