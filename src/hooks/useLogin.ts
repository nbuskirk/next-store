// hooks/useLogin.ts
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';

type LoginInput = {
  email: string;
  password: string;
};

type LoginResponse = {
  success: boolean;
  message: string;
  token?: string; // Optional token if login is successful
};

export function useLogin() {
  return useMutation<LoginResponse, Error, LoginInput>({
    mutationFn: async ({ email, password }) => {
      const response = await axios.post('/api/login', { email, password });
      return response.data;
    },
  });
}
