import express  from 'express';
import cors  from 'cors';
import helmet  from 'helmet';
import logger  from 'morgan';
import rateRouter from "../routes/rate.js"
import { fileURLToPath } from "url";
var corsOption = {
    origin: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    exposedHeaders: ["x-auth-token"],
  };


export default function(app){
    app.use(cors(corsOption));
    app.use(helmet());
    app.use(logger('dev'));

    app.use(express.json());
    app.use(express.urlencoded({extended:false}));
    app.use('/api', rateRouter);
}
