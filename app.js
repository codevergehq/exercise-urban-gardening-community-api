// app.js
require('dotenv').config();
const express = require('express');
const connectDB = require('./database/db');
const gardenRoutes = require('./routes/garden.routes');


const app = express();

// Middleware
app.use(express.json());

// Connect to MongoDB
connectDB();

// Mount garden routes on /api path
app.use('/api', gardenRoutes);


module.exports = app;