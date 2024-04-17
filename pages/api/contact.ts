import { NextApiRequest, NextApiResponse } from 'next';
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        console.log('Data', req.body);

        const { first_name, last_name, category, email, phone, zip, details } = req.body;

        // SendGrid
        const msg = {
            to: 'dewanmohammad.tasinuzzaman@ontariotechu.net', // Change to your recipient
            from: 'sender@vivaallergy.ca', // Change to your verified sender
            subject: 'Viva Allergy - DO NOT REPLY',
            text: ` Hello,\n
                    You have received a new entry from:\n
                    Name: ${first_name} ${last_name}\n
                    Email: ${email}\n
                    Category: ${category}\n
                    Phone: ${phone}\n
                    Postal Code: ${zip}\n
                    Details: ${details}
            `,
        };

        await sgMail.send(msg);

        console.log('Email sent');
        res.status(200).json({ submitted: true });
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
