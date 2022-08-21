import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import connection from './db/conn.js';
import mongoose  from 'mongoose';
import Populations from './models/schema.js';
import router from './router/router.js';
import cors from 'cors';
 
const app=express();
dotenv.config();
const port = process.env.PORT || 6967;

const USER=process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

app.use(express.json());
app.use(cors())
app.use(router);

app.get('/',(req,res)=>{
    res.json("server is ok")
})
connection(USER,PASSWORD); //Connect the server to the database

app.listen(port,()=>{console.log(`Server running at port no. ${port}`)}); 