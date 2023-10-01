import nodemailer from 'nodemailer';

export async function sendEmail(email: string) {
  try {
    // Создание объекта для отправки почты
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Замените на адрес SMTP-сервера
      port: 587, // Замените на порт SMTP-сервера
      secure: false, // Установите true, если используете SSL
      auth: {
        user: process.env.EMAIL, // Замените на ваше имя пользователя
        pass: process.env.EMAIL_PASSWORD // Замените на ваш пароль
      },
    });

    // Настройка письма
    const mailOptions = {
      from: 'HealthHub - Virtual Care for Youre Mind and Soul', // Замените на ваше имя пользователя
      to: email, // Замените на адрес получателя
      subject: 'Congratulations on Registering with HealthHub',
      html: `
      <html>
        <body>
          <img src="" alt="HealthHub Logo" width="200">
          <h1>Welcome to HealthHub!</h1>
          <p>Thank you for registering with HealthHub. We are excited to have you on board.</p>
        </body>
      </html>
    `,
    };

    // Отправка письма
    const info = await transporter.sendMail(mailOptions);

    console.log('Письмо успешно отправлено:', info.response);
  } catch (error) {
    console.error('Ошибка при отправке письма:', error);
  }
}

