"use strict";
const { Client } = require('pg');
const client = new Client({
    connectionString: 'postgres://dnkwwjkgcebqou:bab51dadab9e0173fb9c56c0ad15be2827cdadac85b86009f42af012134e1886@ec2-54-73-68-39.eu-west-1.compute.amazonaws.com:5432/d4f0iti0f3jmte',
    ssl: {
        rejectUnauthorized: false
    }
});
module.exports = client;
