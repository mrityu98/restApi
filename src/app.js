import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
dotenv.config();
import './db/conn.js';
import mongoose  from 'mongoose';
import Populations from './models/schema.js';
import router from './router/router.js';
import cors from 'cors';
 
  
const app=express();
const port = process.env.PORT || 6967;

app.use(express.json());
app.use(cors())
app.use(router);

//Connect the server to the database

app.listen(port,()=>{console.log(`Server running at port no. ${port}`)}); 