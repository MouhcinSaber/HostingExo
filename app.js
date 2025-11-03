require('dotenv').config();
var express = require('express');

const { connectDB } = require('./Config/db');
connectDB();
const cors = require('cors');

var heropageRouter = require('./Routing/heropage');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({
    origin: 'http://localhost:5174',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
    }));

app.use('/', heropageRouter);

app.use(express.static('dist', {
    maxAge: '0',
    etag: false
}));

app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});



app.listen(process.env.PORT || 3000, () => {
    console.log('Server is running on port 3000');
});