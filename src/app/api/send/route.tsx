import { NextResponse } from 'next/server';
import { Resend } from 'resend';

import EmailTemplate from '@/app/components/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Response) {
  const {email, subject, message} = await req.json();
  try {
    const data = await resend.emails.send({
      from: email,
      to: ['snezhinka2809@mail.ru'],
      subject: 'Hello world',
      react: EmailTemplate({subject, message }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
