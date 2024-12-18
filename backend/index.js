import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import helmet from "helmet";
import cookieParser from 'cookie-parser';
import { DATABASE, MAX_JSON_SIZE, ORIGIN_HOST_SITE, PORT, REQUEST_NUMBER, REQUEST_TIME_LIMIT, URL_INCODE, WEB_CASH } from './src/config/config.js';
import router from './src/routers/api.js';

const app = express();

// === URL Request Limit
const limiter = rateLimit({
    windowMs: REQUEST_TIME_LIMIT,
    max: REQUEST_NUMBER,
})

let corsOptions = {
    origin: ORIGIN_HOST_SITE,
    credentials: true,
}
app.use(limiter);
app.use(helmet());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json({ limit: MAX_JSON_SIZE }));
app.use(express.urlencoded({ extended: URL_INCODE }));
app.set('etag', WEB_CASH);

app.use('/v1', router);

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