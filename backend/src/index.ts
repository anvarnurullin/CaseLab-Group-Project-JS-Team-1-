import bodyParser from 'body-parser';
import express from 'express';
import cookieSession from 'cookie-session';
import { router } from './requests/getRequests';
const path = require('path');
export const appRoot = path.resolve(__dirname);

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieSession({ keys: ['lkscdskchj'] }));
app.use(express.static(__dirname + "/static/"));
app.use(router);

const PORT = process.env.PORT || 80;

app.listen(PORT);