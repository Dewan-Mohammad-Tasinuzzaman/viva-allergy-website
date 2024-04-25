import { NextApiRequest, NextApiResponse } from 'next';
const sgMail = require('@sendgrid/mail');

// API KEY
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        console.log('Data', req.body);

        const { first_name, last_name, category, email, phone, zip, details } = req.body;

        // SendGrid
        const msg = {
            to: 'poallergie@omegalabs.ca', // Change to your recipient
            from: 'sender@vivaallergy.ca', // Change to your verified sender
            subject: 'Viva Allergy Website - DO NOT REPLY HERE',
            text: `Hello,\nYou have received a new entry from:\nName: ${first_name} ${last_name}\nEmail: ${email}\nCategory: ${category}\nPhone: ${phone}\nPostal Code: ${zip}\nDetails: ${details}`,
        };

        await sgMail.send(msg);

        console.log('Email sent');
        res.status(200).json({ submitted: true });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
