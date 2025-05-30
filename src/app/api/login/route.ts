import { NextRequest, NextResponse } from 'next/server';
export async function POST(req: NextRequest) {
  const { email, password } = await req.json();
  if (!email || !password) {
    return NextResponse.json(
      { error: 'Email and password are required' },
      { status: 400 }
    );
  }

  if (email === 'admin@admin.com' && password === 'password') {
    const fakeToken = Buffer.from(`${email}:${password}`).toString('base64');
    const response = NextResponse.json(
      {
        success: true,
        message: 'Login successful',
        token: fakeToken,
      },
      { status: 200 }
    );
    response.cookies.set({
      name: 'token',
      value: fakeToken,
    });
    return response;
  }
  return NextResponse.json(
    { message: 'Invalid email or password' },
    { status: 401 }
  );
}
