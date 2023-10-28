import nodemailer from 'nodemailer';
import * as pug from 'pug';
import * as path from 'path';

export async function sendEmail(email: string) {
  try {
    // Создание объекта для отправки почты
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com', // Замените на адрес SMTP-сервера
      port: 587, // Замените на порт SMTP-сервера
      secure: false, // Установите true, если используете SSL
      auth: {
        user: 'valerysandler@gmail.com', // Замените на ваше имя пользователя
        pass: 'kbcqmlstdgcdecux', // Замените на ваш пароль
      },
    });

    const emailTemplate = pug.compileFile(path.join(__dirname, 'emailTemplate.pug'));
        // Переменные для вашего поздравительного сообщения
    const templateData = {

    };

    const htmlContent = emailTemplate(templateData);

    // Настройка письма
    const mailOptions = {
      from: 'HealthHub Team <your_email@gmail.com>', // Замените на ваше имя пользователя
      to: email, // Замените на адрес получателя
      subject: 'Welcome to HealthHub',
      html: htmlContent,
    };

    // Отправка письма3
    const info = await transporter.sendMail(mailOptions);

    console.log(':', info.response);
  } catch (error) {
    console.error('Ошибка при отправке письма:', error);
  }
}

