import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_HOST_PORT),
    secure: true,
    auth: {
        user: process.env.SMTP_MAIL_ID,
        pass: process.env.SMTP_PASSWORD
    },
    tls: {
        rejectUnauthorized: false,
    }
});

const sendEmail = async (email, subject, content, title, user, retries = 3) => {
    let attempt = 0;
    while (attempt < retries) {
        try {
            const mailOptionsVerify = {
                from: process.env.SMTP_MAIL_ID,
                to: email,
                subject: subject,
                html: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title></title>
                    <style>
                        /* Add your styles here */
                    </style>
                </head>
                <body>
                    <div>
                        <h1>${title}</h1>
                        <p><strong>Dear ${user},</strong></p>
                        <p>${content}</p>
                    </div>
                </body>
                </html>
                `
            };

            await transporter.sendMail(mailOptionsVerify);
            console.log("Email sent successfully");

            return { success: true };
        } catch (error) {
            attempt++;
            console.error(`Attempt ${attempt} failed: ${error.message}`);

            if (attempt >= retries) {
                throw new Error(`Failed to send email after ${retries} attempts: ${error.message}`);
            }
        }
    }
};

export { transporter, sendEmail };