const express = require('express');
const mysql = require('mysql2/promise'); // Use promise-based mysql2
const session = require('express-session');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config(); // Use dotenv to load environment variables

const app = express();

// Connect to the database
const connectDB = async () => {
    try {
        const db = await mysql.createConnection({
            host: process.env.DB_HOST,        // Use environment variables
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });
        console.log('Connected to database');
        return db;
    } catch (err) {
        console.error('Database connection failed: ', err);
        process.exit(1); // Exit process with failure
    }
};

const db = connectDB();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
    secret: process.env.SESSION_SECRET, // Use environment variable for session secret
    resave: false,
    saveUninitialized: false
}));
app.set('view engine', 'ejs');

// Routes
const authRoutes = require('./routes/auth');
const schedulerRoutes = require('./routes/scheduler');

app.use('/', authRoutes);
app.use('/scheduler', schedulerRoutes);

// Start server
const PORT = process.env.PORT || 3000; // Use environment variable for port if available
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
