require('dotenv').config();
var express = require('express');

const { connectDB } = require('./Config/db');
connectDB();

var heropageRouter = require('./Routing/heropage');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', heropageRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});