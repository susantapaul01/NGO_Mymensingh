import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import helmet from "helmet";
import cookieParser from 'cookie-parser';
import { DATABASE, MAX_JSON_SIZE, PORT, REQUEST_NUMBER, REQUEST_TIME_LIMIT, URL_INCODE, WEB_CASH } from './src/config/config.js';


const app = express();

// === URL Request Limit
const limiter = rateLimit({
    windowMs: REQUEST_TIME_LIMIT,
    max: REQUEST_NUMBER,
})

app.use(limiter);
app.use(helmet());
app.use(cors());
app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.urlencoded({ extended: URL_INCODE }));
app.set('etag', WEB_CASH);


mongoose.connect(DATABASE, { 
    autoIndex: true
}).then(() => {
    console.log('Database connection successful')
}).catch((error) => {
    console.log(error.toString());
});


app.listen(PORT, () => {
    console.log(`Server port ${PORT} is running successful`);
})