import express from 'express';
import dotenv from 'dotenv';
import Connection from './db/conn.js';
import mongoose  from 'mongoose';
import Populations from './models/schema.js';
import router from './router/router.js';
import cors from 'cors';

const app=express();
const port = process.env.port || 6967;
dotenv.config();
const USER=process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

app.use(express.json());
app.use(cors())
app.use(router);

Connection(USER,PASSWORD);

app.listen(port,()=>{console.log(`Server running at port no. ${port}`)}); 