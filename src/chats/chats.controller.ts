import type { Request, Response } from 'express';
import { findChats } from './chats.service';

export async function getChats(_request: Request, response: Response) {
  const chats = await findChats();
  response.json(chats);
}
