import { User } from '../../types/user';

export interface AccountState {
  isLogin: boolean;
  user?: User;
}
