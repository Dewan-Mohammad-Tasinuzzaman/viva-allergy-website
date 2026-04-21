import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { first_name, last_name, category, email, phone, zip, details } = req.body;

    if (!first_name || !last_name || !email || !details) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const { error } = await resend.emails.send({
      from: 'Omega Allergies <noreply@mail.omegaallergies.ca>',
      to: ['poallergies@junopharma.com'],
      replyTo: email,
      subject: 'Omega Allergies Website Contact Form',
      text: `
New contact form submission

Name: ${first_name} ${last_name}
Email: ${email}
Category: ${category || ''}
Phone: ${phone || ''}
Postal Code: ${zip || ''}
Details: ${details}
      `.trim(),
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Failed to send email' });
    }

    return res.status(200).json({ submitted: true });
  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}