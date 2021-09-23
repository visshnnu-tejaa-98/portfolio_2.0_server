// npm imports
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// local imports
const { connectDB } = require('./config/db');

// configs
dotenv.config();
connectDB();

// constants
const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.get('/', (req, res) => {
	res.send('Hello, This is my portfolio');
});

// listener
app.listen(PORT, () => {
	console.log(`::: Server is up and running in port ${PORT} :::`);
});
