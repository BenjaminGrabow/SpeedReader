const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('./auth/auth-router.js');
const usersRouter = require('./users/users-router.js');
const textRouter = require('./text-app/text-router.js');
const findWordRouter = require('./find-word-app/find-word-router.js');
const memoryRouter = require('./memory-app/memory-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/auth', authRouter);
server.use('/users', usersRouter);
server.use('/text', textRouter);
server.use('/find_word', findWordRouter);
server.use('/memory', memoryRouter);

module.exports = server;