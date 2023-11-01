import { Router } from 'express';
import authController from '../controllers/auth.controller';

const router = Router()
// Test
router.get('/test', (request, response) => {
    response.send('Auth test');
});

router.post('/login', authController.login);
router.post('/register', authController.register);
router.post('/forgot-password', authController.forgotPassword);
router.get('/reset-password/:token', authController.resetPassword);
router.post('/logout', authController.logout);


export const authRouter = router;