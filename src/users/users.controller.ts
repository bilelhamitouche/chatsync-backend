import type { Request, Response } from 'express';
import { findUsers } from './users.service';

export async function getUsers(_request: Request, response: Response) {
  const users = await findUsers();
  response.json(users);
}
