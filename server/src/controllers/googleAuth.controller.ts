import express from 'express';
import { StatusCodes } from 'http-status-codes';
import { google } from 'googleapis';


const OAuth2Client = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    process.env.GOOGLE_CALLBACK_URL
);


const googleLogin = (request: express.Request, response: express.Response) => {
    const authUrl = OAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: ['https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email'],
    });
    response.redirect(authUrl);
};

const googleCallback = async (request: express.Request, response: express.Response) => {
    const code = request.query.code as string;
    if (!code) {
        response.status(StatusCodes.BAD_REQUEST).json('Code is required');
        return;
    }
    const { tokens } = await OAuth2Client.getToken(code);
    OAuth2Client.setCredentials(tokens);

    // Теперь у вас есть доступ к API Google. Вы можете использовать OAuth2Client для вызовов к API.
    const oauth2 = google.oauth2({ version: 'v2', auth: OAuth2Client });

    oauth2.userinfo.get((err, response) => {
        if (err) {
            console.error('Error getting user info:', err);
            return;
        }

        const userData = response.data;
        // Обработка полученных данных, например, сохранение в базе данных.
        console.log("User data", userData);
    });

};


export default {
    googleLogin,
    googleCallback,
};