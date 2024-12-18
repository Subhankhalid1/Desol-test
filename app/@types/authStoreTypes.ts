export interface AuthState {
    token: string | null;
    user: { email: string } | null;
    login: (userData: { email: string }, token: string) => void;
    logout: () => void;
  }