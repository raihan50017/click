// src/repositories/IUserRepository.ts
import { Result } from './Result';

export interface IUserRepository {
  getUsers(): Promise<Result<User[]>>;
  getUserById(id: number): Promise<Result<User>>;
}

// Define the User type
export interface User {
  id: number;
  name: string;
  email: string;
}
