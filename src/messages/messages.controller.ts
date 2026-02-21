import type { Request, Response } from 'express';
import { findMessages } from './messages.service';

export async function getMessages(_request: Request, response: Response) {
  const messages = await findMessages();
  response.json(messages);
}
