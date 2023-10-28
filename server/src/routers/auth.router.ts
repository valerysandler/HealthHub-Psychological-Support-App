import { Router } from 'express';
import authController from '../controllers/auth.controller';

const router = Router();

// Test
router.get('/test', (request, response) => {
    response.send('Auth test');
});

router.post('/register', authController.register);
router.post('/login', authController.login);

export const authRouter = router;