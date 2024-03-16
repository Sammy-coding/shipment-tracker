import {IAuthState} from './state.interface';

export const AuthState: IAuthState = {
  data: null,
  error: null,
  isAuthFailure: false,
  isAuthSuccess: false,
  loading: false,
};
