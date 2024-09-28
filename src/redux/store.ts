import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './features/counter/counterSlice';
import usersReducers from './features/users/userSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    users: usersReducers,
  },
});

// Define the RootState and AppDispatch types based on the store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
