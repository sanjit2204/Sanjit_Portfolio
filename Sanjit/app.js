const express = require('express');
const path = require('path');
const app = express();

// Set view engine to EJS
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Static files
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => res.render('index'));
app.get('/projects', (req, res) => res.render('projects'));
app.get('/experience', (req, res) => res.render('experience'));
app.get('/education', (req, res) => res.render('education'));
app.get('/resume', (req, res) => res.render('resume'));

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));