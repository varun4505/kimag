import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();
    
    const adminPassword = process.env.ADMIN_PASSWORD;
    
    if (!adminPassword) {
      return NextResponse.json(
        { error: 'Admin password not configured' },
        { status: 500 }
      );
    }
    
    if (password === adminPassword) {
      return NextResponse.json(
        { success: true, message: 'Authentication successful' },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Error in admin auth:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
