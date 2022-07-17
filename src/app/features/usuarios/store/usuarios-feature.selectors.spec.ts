import * as fromUsuariosFeature from './usuarios-feature.reducer';
import { selectUsuariosFeatureState } from './usuarios-feature.selectors';

describe('UsuariosFeature Selectors', () => {
  it('should select the feature state', () => {
    const result = selectUsuariosFeatureState({
      [fromUsuariosFeature.usuariosFeatureFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
