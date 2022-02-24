"use strict";
const connection = require('./connection.ts');
connection.connect();
if (connection) {
    console.log('database connection');
}
