import { User } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux'
import { setUser, removeUser } from '../redux-store';


export function useUser(): [User | null, (newUser: User) => void, () => void] {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const wrappedSetUser = (newUser: User) => {
    dispatch(setUser(newUser));
  }

  const wrapppedRemoveUser = () => {
    dispatch(removeUser());
  }

  return [user, wrappedSetUser, wrapppedRemoveUser]
}

interface iUser {
  uid: string
  email: string | null
  emailVerified: boolean
  isAnonymous: boolean,
}