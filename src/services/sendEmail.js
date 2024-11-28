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
                            body {
                                font-family: Arial, sans-serif;
                                margin: 0;
                                padding: 0;
                                background-color: #f4f4f4;
                                color: #333;
                            }
                            .email-container {
                                max-width: 600px;
                                margin: 20px auto;
                                background: #ffffff;
                                border-radius: 8px;
                                overflow: hidden;
                                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                            }
                            .header {
                                text-align: center;
                                background-color: #00B5E2;
                                color: #ffffff;
                                padding: 20px;
                            }
                            .header img {
                                max-width: 100px;
                                margin-bottom: 10px; /* Adds space between the logo and title */
                            }
                            .header h1 {
                                margin: 0;
                                font-size: 24px;
                            }
                            .content {
                                padding: 20px;
                                line-height: 1.6;
                            }
                            .content p {
                                margin: 10px 0;
                            }
                            .footer {
                                background-color: #f9f9f9;
                                text-align: center;
                                padding: 15px;
                                font-size: 14px;
                                color: #666;
                            }
                            .footer a {
                                color: #00B5E2;
                                text-decoration: none;
                                margin: 0 5px;
                            }
                            .social-icons img {
                                width: 24px;
                                margin: 0 10px;
                            }
                            .footer p {
                                margin: 5px 0;
                            }
                        </style>
                    </head>
                    <body>
                        <div class="email-container">
                            <div class="header">
                                <img src="https://res.cloudinary.com/dpu6ljn5c/image/upload/v1732774635/oijse8vq6fp6lxjjr1xx.png" alt="ES Gishoma Logo">
                                <h1>${title}</h1>
                            </div>

                            <div class="content">
                                    <p><strong>Dear ${user}</strong></p>
                                <p>
                            ${content}
                            </p>
                            </div>

                            <div class="footer">
                                <div class="social-icons">
                                    <a href="https://facebook.com"><img src="https://via.placeholder.com/24x24?text=FB" alt="Facebook"></a>
                                    <a href="https://twitter.com"><img src="https://via.placeholder.com/24x24?text=TW" alt="Twitter"></a>
                                    <a href="https://instagram.com"><img src="https://via.placeholder.com/24x24?text=IG" alt="Instagram"></a>
                                </div>
                                <p>Contact us: <a href="mailto:support@example.com">info@esgishoma.rw</a> | Phone: +1234567890</p>
                                <p>Address: 123 Example Street, Rusizi, Rwanda</p>
                                <p>&copy; 2024 ES Gishoma. All rights reserved.</p>
                            </div>
                        </div>
                    </body>
                    </html>

                `
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