// src/features/users/userSlice.ts
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { UserRepository } from '../../../repositories/UserRepository';
import { User } from '../../../repositories/IUserRepository';
import { Result } from '../../../repositories/Result';

const userRepository = new UserRepository();

export interface UsersState {
  users: User[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: UsersState = {
  users: [],
  status: 'idle',
  error: null,
};

// Async Thunk for fetching users
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const result: Result<User[]> = await userRepository.getUsers();
  
  if (result.success) {
    return result.data;
  } else {
    throw new Error(result.error);
  }
});

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload || [];
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch users';
      });
  },
});

export default userSlice.reducer;
