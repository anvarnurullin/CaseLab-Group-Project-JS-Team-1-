import { Router, Request, Response } from "express";
import { QueryResult } from "pg";
var connection = require('../../build/dataBase/connection.js');
connection.connect();
if(connection){
    console.log('database connection')
}
const router = Router();

router.post('/newOrder', (req: Request, response: Response) => {
  response.header("Content-Type",'application/json');
  console.log(req.body);
});