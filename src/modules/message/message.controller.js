const messageRoutes = express.Router();
import * as messages from "./service/message.service.js";
import { messageSchema } from './message.validator.js';
import { authenticate } from '../../middleware/authenticate.js';
import { validation } from '../../utlits/validation.js';




messageRoutes.get('/', authenticate, messages.getAllMessages);
messageRoutes.post("/add", authenticate, validation(messageSchema), messages.sendMessage);
messageRoutes.delete('/delete/:id', messages.deleteMessage)

export default messageRoutes; 