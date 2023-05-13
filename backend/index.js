import express from 'express';
import cookieParser from "express";
import cors from 'cors';
import router from './routes/index.js';

const app = express();

const port = process.env.PORT || 4000;

app.use(express.json({type: ['application/json', 'text/plain']}));

app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(cookieParser());
app.use('/',router)

app.listen(port, ()=>{
    console.log(`El servidor está corriedno en el puerto ${port}`)
})