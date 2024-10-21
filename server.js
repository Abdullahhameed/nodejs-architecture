import dotenv from 'dotenv';
import helmet from "helmet";
import express from 'express';
import Router from './routes/indexRoutes.js';
import * as statusCodes from './constants/constants.js';
import responseFormatter from './middlewares/ResponseFormatterMiddleware.js';

// Assign to global
global.statusCodes = statusCodes;

// env configuration
dotenv.config()

const app = express();

app.use(helmet());
app.use(express.json());

// API Responce Formatter Middleware
app.use(responseFormatter);

// Call Route index file
app.use('/', Router);

const port = process.env.PORT || 9000;
app.listen(port, () =>  console.log(`Server is running on ${process.env.BASE_URL}:${port}`));