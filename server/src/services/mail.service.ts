import nodemailer from 'nodemailer';
import jwt from 'jsonwebtoken';

// Create a transporter object that will be used to send emails
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: { user: process.env.EMAIL, pass: process.env.EMAIL_PASSWORD },
});

// Send activation link to user email
const sendActivationLink = async (email: string) => {
    try {
        // Generate activation link with redirect to frontend
        const activationLink = `${process.env.API_URL}/api/activate-account/${email}`;
        // options for sending email
        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: "HealthHub - activation link for your account 📧",
            text: `
                Enter this link in your browser to activate your account: ${activationLink}
            `,
            html: `
                <div>
                    <h1>
                        HealthHub - activation link for your account 📧
                    /h1>
                    <p>
                        Enter this link in your browser to activate your account:
                    </p>
                    <a href="${activationLink}">${activationLink}</a>
                </div>
            `
        };
        // Отправка письма
        const send = await transporter.sendMail(mailOptions);
        console.log('Письмо отправлено:', send);
    } catch (error) {
        console.error('Ошибка при отправке письма:', error);
    }
}

const sendForgotPasswordLink = async (email: string, link: string) => {
    try {
        // Create link uuid for reset password link with redirect to frontend and token as query param in url 
        // Generate forgot password link with redirect to frontend
        // options for sending email
        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: "HealthHub - forgot password link for your account 📧",
            text: `
                Enter this link in your browser to reset your password: ${link}
            `,
            html: `
                <div>
                    <h1>
                        HealthHub - forgot password link for your account 📧
                    </h1>
                    <p>
                        Enter this link in your browser to reset your password:
                    </p>
                    <a href="${link}">${link}</a>
                </div>
            `
        };
        // Отправка письма
        const send = await transporter.sendMail(mailOptions);
        console.log('Письмо отправлено:', send);
    } catch (error) {
        console.error('Ошибка при отправке письма:', error);
    }
}

2
export default {
    sendActivationLink,
    sendForgotPasswordLink,
}