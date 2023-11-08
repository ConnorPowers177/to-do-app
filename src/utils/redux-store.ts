import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User } from 'firebase/auth';

const userSlice = createSlice({
  name: 'user',
  initialState: null as User | null,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      return action.payload;
    },
    removeUser: (state) => {
      return null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
})

export default store;