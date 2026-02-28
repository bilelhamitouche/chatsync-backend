import express from 'express';
import cors from 'cors';
import http from 'http';
import { toNodeHandler } from 'better-auth/node';
import { auth } from './lib/auth';
import { usersRouter } from './users/users.router';
import { chatsRouter } from './chats/chats.router';
import { messagesRouter } from './messages/messages.router';
import { Server, Socket } from 'socket.io';

const PORT = process.env.PORT || 8000;
const app = express();
const server = http.createServer(app);

app.use(
  cors({
    origin: ['http://localhost:3000'],
    credentials: true,
  }),
);

app.all('/api/auth/*splat', toNodeHandler(auth));

app.use(express.json());

app.use('/api/users', usersRouter);
app.use('/api/chats', chatsRouter);
app.use('/api/messages', messagesRouter);

const io = new Server(server, {
  cors: {
    origin: ['http://localhost:3000'],
  },
});

io.on('connection', (socket: Socket) => {
  console.log('Socket connected');
  socket.on('message', async (message) => {
    console.log(message);
    io.emit('message', message);
  });
  socket.on('disconnect', () => console.log('User disconnected'));
});

server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
