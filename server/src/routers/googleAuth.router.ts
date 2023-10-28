import { Router } from 'express';
import googleAuthController from '../controllers/googleAuth.controller';

const router = Router();
// Test route
router.get('/test', (request, response) => {
    response.send('Auth test');
});

router.get('/auth', googleAuthController.googleLogin);
router.get('/callback', googleAuthController.googleCallback);

export const googleAuthRouter = router;

