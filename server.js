const express = require('express');
const mysql = require('promise');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const app = express();
app.use(express.json());

// Database connection
const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Swayamnerkar@1605',
  database: 'curriculum_scheduler',
});

// Secret key for JWT
const secretKey = 'secretkey';

// Login API
app.post('/api/auth/login', async (req, res) => {
  const { enrollmentNumber, password } = req.body;
  try {
    const [user] = await db.execute('SELECT * FROM users WHERE email = ?', [enrollmentNumber]);
    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
    const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });
    await db.execute('INSERT INTO tokens SET ?', { userId: user.id, token });
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Signup API
app.post('/api/auth/signup', async (req, res) => {
  const { name, email, contactNumber, branch, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.execute('INSERT INTO users SET ?', { name, email, contactNumber, branch, password: hashedPassword });
    const [user] = await db.execute('SELECT * FROM users WHERE email = ?', [email]);
    const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });
    await db.execute('INSERT INTO tokens SET ?', { userId: user.id, token });
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Protected route
app.get('/api/home', authenticateToken, (req, res) => {
  res.json({ message: 'Welcome to the home page' });
});

// Authenticate token middleware
function authenticateToken(req, res, next) {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Access denied' });
  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
}

// Logout API
app.post('/api/auth/logout', authenticateToken, async (req, res) => {
  try {
    await db.execute('DELETE FROM tokens WHERE userId = ?', [req.user.userId]);
    res.json({ message: 'Logged out successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});