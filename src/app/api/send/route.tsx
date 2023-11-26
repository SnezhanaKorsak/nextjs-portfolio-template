import { NextResponse } from 'next/server';
import { Resend } from 'resend';

import EmailTemplate from '@/app/components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { email, subject, message } = await req.json();
  try {
    const data = await resend.emails.send({
      from: email,
      to: process.env.EMAIL_TO,
      subject: 'Hello world',
      react: EmailTemplate({ subject, message }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
