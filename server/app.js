<<<<<<< HEAD
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

=======
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
const allowedOrigins = [
  'http://localhost:3000',
  'https://klfocusgrievance-tau.vercel.app'
];

const corsOptions = {
  origin: function(origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.indexOf(origin) !== -1 || process.env.NODE_ENV === 'development') {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'Accept', 'Origin', 'X-Requested-With'],
  exposedHeaders: ['Set-Cookie']
};

// Apply CORS before any other middleware
app.use(cors(corsOptions));

// Cookie settings middleware
app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin) || process.env.NODE_ENV === 'development') {
    res.header('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Credentials', 'true');
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

>>>>>>> 7d7aefbbb398a40eb1e067303007be1d7c8015d9
