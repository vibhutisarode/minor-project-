const express = require('express');
const db = require('../config/db');
const router = express.Router();

// Middleware to protect routes
function isLoggedIn(req, res, next) {
    if (req.session.user) {
        next();
    } else {
        res.redirect('/login');
    }
}

// Display Schedules
router.get('/', isLoggedIn, (req, res) => {
    const userId = req.session.user.id;
    const query = 'SELECT * FROM schedules WHERE user_id = ?';

    db.execute(query, [userId], (err, results) => {
        if (err) throw err;
        res.render('scheduler', { schedules: results });
    });
});

// Add New Schedule
router.post('/add', isLoggedIn, (req, res) => {
    const { curriculum, time_slot } = req.body;
    const userId = req.session.user.id;

    const query = 'INSERT INTO schedules (user_id, curriculum, time_slot) VALUES (?, ?, ?)';
    db.execute(query, [userId, curriculum, time_slot], (err) => {
        if (err) throw err;
        res.redirect('/scheduler');
    });
});

module.exports = router;
