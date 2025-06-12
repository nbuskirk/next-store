'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete('token'); // Delete the session cookie
  // Or delete all cookies
  // cookies().getAll().forEach((cookie) => cookies().delete(cookie.name));
  redirect('/'); // Redirect to the home page
}
