'use client';

import { useState } from 'react';
import { useLogin } from '@/hooks/useLogin';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginMutation = useLogin();
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await loginMutation.mutateAsync({ email, password });
      if (response.success) {
        localStorage.setItem('user', email);
        window.location.href = '/';
      } else {
        setMessage(response.message);
      }
    } catch (error) {
      setMessage('Invald email or password');
      console.error('Login error:', error);
    }
  };

  return (
    <div className='flex min-h-screen items-center justify-center bg-gray-100'>
      <div className='w-full max-w-sm rounded-lg bg-white p-8 shadow-md'>
        <h1 className='mb-6 text-2xl font-bold text-stone-900'>Login</h1>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <div className='mb-4'>
            <label
              className='mb-2 block text-sm font-medium text-stone-800'
              htmlFor='email'
            >
              Email
            </label>
            <input
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full rounded border border-gray-300 px-3 py-2 text-stone-800 focus:ring-2 focus:ring-blue-500 focus:outline-none'
              required
            />
          </div>
          <div className='mb-6'>
            <label
              className='mb-2 block text-sm font-medium text-stone-800'
              htmlFor='password'
            >
              Password
            </label>
            <input
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full rounded border border-gray-300 px-3 py-2 text-stone-800 focus:ring-2 focus:ring-blue-500 focus:outline-none'
              required
            />
          </div>
          <button
            type='submit'
            className='w-full rounded bg-blue-600 py-2 text-white transition-colors hover:bg-blue-700'
          >
            Login
          </button>
        </form>
        {message && <div className='mt-4 text-red-600'>{message}</div>}
      </div>
    </div>
  );
}
