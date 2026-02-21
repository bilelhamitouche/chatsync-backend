import { Router } from 'express';
import { getUsers } from './users.controller';

export const usersRouter = Router();

usersRouter.get('/', getUsers);
