import { NextRequest, NextResponse } from 'next/server';
import { sendContactFormEmail, sendContactConfirmationEmail } from '@/lib/mail';

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { message: 'Name, email, subject, and message are required.' },
        { status: 400 }
      );
    }

    // Send email to admin/team
    await sendContactFormEmail({
      name,
      email,
      phone: phone || '',
      subject,
      message
    });

    // Send confirmation email to user
    await sendContactConfirmationEmail({
      name,
      email,
      subject
    });

    return NextResponse.json({ 
      message: 'Your message has been sent successfully! We\'ll get back to you soon.' 
    });

  } catch (error) {
    console.error('Error sending contact form:', error);
    return NextResponse.json(
      { message: 'There was an error sending your message. Please try again later.' },
      { status: 500 }
    );
  }
}
