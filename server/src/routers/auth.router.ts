import { Router } from 'express';
import authController from '../controllers/auth.controller';

const router = Router()
// Test
router.get('/test', (request, response) => {
    response.send('Auth test');
});

router.post('/login', authController.login);
router.post('/register', authController.register);
router.post('/logout', authController.logout);
// router.get('/activate-acount/:email', authController.activateAccount);
router.post('/forgot-password', authController.forgotPassword);
router.post('/reset-password/:userId/:token', authController.resetPassword);


export const authRouter = router;