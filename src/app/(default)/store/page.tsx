'use client';

// import { useState, useEffect } from 'react';
export default function Home() {
  // const [user, setUser] = useState<string | null>(null);

  // useEffect(() => {
  //   const storedUser = localStorage.getItem('user');
  //   if (storedUser) {
  //     setUser(storedUser);
  //   }
  // }, []);
  return (
    <div className='flex h-[calc(100vh-112.5px)] flex-col items-center justify-center bg-neutral-200 text-neutral-800'>
      <h1 className='mb-4 text-4xl font-bold'>Store Page</h1>
      <p className='text-lg'>This is the store page content.</p>
    </div>
  );
}
