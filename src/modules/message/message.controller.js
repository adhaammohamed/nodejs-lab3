import { Router } from 'express';

import * as messages from "./service/message.service.js";
import { authenticate } from '../../middleware/authenticate.js';
import { validation } from '../../utlits/validation.js';
import { messageValidatSchema } from './validationMassge.js';



const messageRoutes = Router();
 
messageRoutes.get('/', authenticate, messages.getAllMessages);
messageRoutes.post("/add", authenticate, validation(messageValidatSchema), messages.sendMessage);
messageRoutes.delete('/delete/:id', messages.deleteMessage)

export default messageRoutes; 