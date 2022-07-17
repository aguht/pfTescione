import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from './login-feature.reducer';

export const selectAuthState = createFeatureSelector<fromAuth.AuthState>(
  fromAuth.authFeatureKey
);

export const selectorUsuarioActivo = createSelector(
  selectAuthState,
  (state: fromAuth.AuthState) => {
    return state;
  }
);
