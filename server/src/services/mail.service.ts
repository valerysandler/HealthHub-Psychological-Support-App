import nodemailer from 'nodemailer';

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
        // Generate activation link
        const activationLink = `${process.env.API_URL}/api/activate/${email}`;
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

const sendForgotPasswordLink = async (email: string, token: string) => {
    try {
        // Generate activation link
        const forgotPasswordLink = `${process.env.API_URL}/api/reset-password/${token}`;
        // options for sending email
        const mailOptions = {
            from: process.env.EMAIL,
            to: email,
            subject: "HealthHub - forgot password link for your account 📧",
            text: `
                Enter this link in your browser to reset your password: ${forgotPasswordLink}
            `,
            html: `
                <div>
                    <h1>
                        HealthHub - forgot password link for your account 📧
                    </h1>
                    <p>
                        Enter this link in your browser to reset your password:
                    </p>
                    <a href="${forgotPasswordLink}">${forgotPasswordLink}</a>
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