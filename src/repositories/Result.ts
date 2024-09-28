// src/repositories/Result.ts
export interface Result<T> {
    success: boolean;
    data?: T;
    error?: string;
  }
  