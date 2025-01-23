import { Router } from 'express';
import * as authService from './service/auth.service.js';
import { validation } from '../../utlits/validation.js';
import { signUpValidatSchema ,signInValidaSchema} from './auth.validation.js';

const authRouter = Router();

authRouter.post('/register',validation(signUpValidatSchema), authService.register);
authRouter.post('/login',validation(signInValidaSchema), authService.login);

export default authRouter;




