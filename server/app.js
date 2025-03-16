process.noDeprecation = true;  // Suppress deprecation warnings

const express = require('express');
const cors = require('cors');
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");

// Load environment variables before other configurations
dotenv.config({path: './config.env'});

// Database connection
require('./db/conn');
const mongoose = require('mongoose');

// Models and Routes
const User = require('./model/userSchema');
const Router = require('./router/auth');

const app = express();

// CORS Configuration
const corsOptions = {
  origin: true, // Allow all origins in development
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'Origin', 'X-Requested-With'],
  exposedHeaders: ['Set-Cookie']
};

// Apply CORS before any other middleware
app.use(cors(corsOptions));

// Cookie settings middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Origin', req.headers.origin);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
  next();
});

// Other middleware
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(Router);
require('./middleware/authenticate');

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

