const express = require('express');
const bcrypt = require('bcryptjs');
const db = require('../config/db'); // Setup the DB connection
const router = express.Router();


// Login form submission
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    // ...
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok) {
        localStorage.setItem('token', result.token);
        window.location.href = 'home.html';
      } else {
        alert(result.msg );
    }
  } catch (error) {
    console.error(error);
  }
});

// Logout button click
logoutButton.addEventListener('click', async () => {
  try {
    const response = await fetch('http://localhost:5000/api/auth/logout', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      },
    });
    if (response.ok) {
      localStorage.removeItem('token');
      window.location.href = 'login.html';
    } else {
      alert('Failed to logout');
    }
  } catch (error) {
    console.error(error);
  }
});



// Register Route
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
    db.execute(query, [name, email, hashedPassword], (err) => {
        if (err) throw err;
        res.redirect('/login');
    });
});

// Login Route
router.post('/login', (req, res) => {
    const { email, password } = req.body;

    const query = 'SELECT * FROM users WHERE email = ?';
    db.execute(query, [email], async (err, results) => {
        if (results.length === 0) {
            return res.send('Invalid email or password');
        }

        const user = results[0];
        const isPasswordCorrect = await bcrypt.compare(password, user.password);

        if (isPasswordCorrect) {
            req.session.user = user;
            res.redirect('/scheduler');
        } else {
            res.send('Invalid email or password');
        }
    });
});

// Logout
router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

module.exports = router;

