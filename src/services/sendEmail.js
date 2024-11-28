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
    }
});

const sendEmail = async (email, subject, message, retries = 3) => {
    let attempt = 0;
    while (attempt < retries) {
        try {
            const mailOptionsVerify = {
                from: process.env.SMTP_MAIL_ID,
                to: email,
                subject: subject,
                html: message
            };

            await transporter.sendMail(mailOptionsVerify);
            console.log("Email sent successfully");
            break;
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