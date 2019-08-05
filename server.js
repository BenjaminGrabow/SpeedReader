const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authRouter = require('./routes/auth-router.js');
// const usersRouter = require('./users/users-router.js');
const textRouter = require('./routes/text-router.js');
const findWordRouter = require('./routes/find-word-router.js');
const memoryRouter = require('./routes/memory-router.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use('/', authRouter);
// server.use('/users', usersRouter);
server.use('/', textRouter);
server.use('/', findWordRouter);
server.use('/', memoryRouter);

module.exports = server;