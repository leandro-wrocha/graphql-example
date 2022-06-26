import 'reflect-metadata';

import express from 'express';
import { PrismaClient } from '@prisma/client';

import './shared/container';

import { UserController } from './modules/user/user.controller';

const app = express()
const prisma = new PrismaClient();
const userController = new UserController();

app.use(express.json());

prisma.$connect().then(() => console.log('db')).catch((e) => console.log(e));

app.post('/register', userController.handle);
app.get('/register', (req, res) => {
  return res.status(200).end();
})


app.listen(3333, () => console.log('Oppa'));
