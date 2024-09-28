// src/repositories/UserRepository.ts
import axios from 'axios';
import { IUserRepository, User } from './IUserRepository';
import { Result } from './Result';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

export class UserRepository implements IUserRepository {
  async getUsers(): Promise<Result<User[]>> {
    try {
      const response = await axios.get(`${API_BASE_URL}/users`);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'An unknown error occurred',
      };
    }
  }

  async getUserById(id: number): Promise<Result<User>> {
    try {
      const response = await axios.get(`${API_BASE_URL}/users/${id}`);
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'An unknown error occurred',
      };
    }
  }
}
