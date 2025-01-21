import { Router } from 'express';
import * as authService from './service/auth.service.js';

const authRouter = Router();

authRouter.post('/register', authService.register);
authRouter.post('/login', authService.login);

export default authRouter;




