
export interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  displayName?: string;
  createdAt: Date;
  isEmailVerified: boolean;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

export interface RegisterCredentials {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
