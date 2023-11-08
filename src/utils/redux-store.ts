import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from 'firebase/auth';

const userSlice = createSlice({
  name: 'user',
  initialState: null as iUser | null,
  reducers: {
    setUser: (state, action: PayloadAction<iUser | null>) => {
      return action.payload;
    },
    removeUser: (state) => {
      return null;
    },
  },
});

interface iUser {
  uid: string
  email: string | null
  emailVerified: boolean
  isAnonymous: boolean,
}

export const { removeUser } = userSlice.actions;

export const setUser = (user : User) => {
  return userSlice.actions.setUser(
    {   
      uid: user.uid,
      email: user.email,
      emailVerified: user.emailVerified,
      isAnonymous: user.isAnonymous,
    }
  )
}

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
})


export default store;