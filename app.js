const express = require('express');
const Connectdb = require('./database/Connectdb');
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || '4095';
const DATABASE_URL = process.env.DATABASE_URL || 'mongodb://localhost:27017';

Connectdb(DATABASE_URL);

app.listen(PORT, ()=>{
    console.log(`server listen at http://localhost:${PORT}`);
});