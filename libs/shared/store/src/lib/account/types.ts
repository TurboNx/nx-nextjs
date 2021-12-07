import { User } from '@nx-nextjs/shared/types';

export interface AccountState {
  isLogin: boolean;
  user?: User;
}
