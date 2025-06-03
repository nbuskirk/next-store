'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);
  return (
    <div>
      <p>homepage</p>
      {user && <p>Welcome, {user}!</p>}
    </div>
  );
}
