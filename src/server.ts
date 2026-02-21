import express from 'express';
import cors from 'cors';
import { toNodeHandler } from 'better-auth/node';
import { auth } from './lib/auth';
import { usersRouter } from './users/users.router';
import { chatsRouter } from './chats/chats.router';
import { messagesRouter } from './messages/messages.router';

const PORT = process.env.PORT || 8000;
const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }),
);

app.all('/api/auth/*splat', toNodeHandler(auth));

app.use(express.json());

app.use('/api/users', usersRouter);
app.use('/api/chats', chatsRouter);
app.use('/api/messages', messagesRouter);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
