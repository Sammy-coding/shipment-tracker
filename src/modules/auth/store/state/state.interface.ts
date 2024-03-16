import {ILoginData} from '../../model/login.model';

export interface IAuthState {
  data: null | ILoginData;
  error: null | string;
  isAuthFailure: boolean;
  isAuthSuccess: boolean;
  loading: boolean;
}
