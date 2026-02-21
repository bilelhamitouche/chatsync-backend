import { Router } from 'express';
import { getMessages } from './messages.controller';

export const messagesRouter = Router();

messagesRouter.get('/', getMessages);
