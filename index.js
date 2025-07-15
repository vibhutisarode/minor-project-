const express = require('express');
const cors = require('cors');
const sequelize = require('./config/database');
const authRoutes = require('./routes/auth');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);

// Test Route
app.get('/', (req, res) => {
  res.send('Student Scheduler Backend is running.');
});

// Connect to MySQL and Start the Server
const PORT = process.env.PORT || 5000;

sequelize.sync()
  .then(() => {
    console.log('MySQL connected and synchronized');
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
  
  const corsOptions = {
    origin: 'http://localhost:5500', // Replace with your frontend's origin
    optionsSuccessStatus: 200
  };
  
  app.use(cors(corsOptions));
  