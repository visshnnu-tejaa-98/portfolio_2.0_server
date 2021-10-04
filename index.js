// npm imports
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

// local imports
const { connectDB } = require('./config/db');
const userRoutes = require('./routes/userRoutes');

// configs
dotenv.config();
connectDB();

// constants
const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
// app.use('/', userRoutes);
app.use(express.json());
app.use('/api/v1/user', userRoutes);

// listener
app.listen(PORT, () => {
	console.log(`::: Server is up and running in port ${PORT} :::`);
});
