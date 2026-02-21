import { Router } from 'express';
import { getChats } from './chats.controller';

export const chatsRouter = Router();

chatsRouter.get('/', getChats);
