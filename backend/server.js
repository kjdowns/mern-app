
// Require packages
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

// Configure dotenv
require('dotenv').config();

// Create express server
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Server listen
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
})